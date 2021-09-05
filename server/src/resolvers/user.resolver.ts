import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { DefaultAuthResponse } from "../utils/responses/default.response";
import { RegisterUserInput } from "../utils/inputs/user/register.input";
import { LoginUserInput } from "../utils/inputs/user/login.input";
import { User } from "../entity/User";
import { generateUserAccessToken } from "../utils/helpers/token/generateAccessToken";
import bc from "bcrypt";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users() {
    return await User.find();
  }

  // login !
  @Mutation(() => DefaultAuthResponse)
  async login(@Arg("data") data: LoginUserInput) {
    // validate
    if (!data.ident || !data.password) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    try {
      const user = await User.findOne({
        where: [{ email: data.ident }, { username: data.ident }],
      });
      if (!user) {
        return {
          status: false,
          message: "No user found with this ident",
        };
      }
      const validate = await bc.compare(data.password, user.password);
      if (!validate) {
        return {
          status: false,
          message: "Invalid password !",
        };
      }
      // login successfuly
      return {
        status: true,
        message: "Login Successfuly !",
        token: generateUserAccessToken(user),
      };
    } catch (e) {
      console.log("something went wrong on login !", e);
      return {
        status: false,
        message: "Something went wrong!",
      };
    }
  }
  // register !
  @Mutation(() => DefaultAuthResponse)
  async register(
    @Arg("data") data: RegisterUserInput
  ): Promise<DefaultAuthResponse> {
    // validate
    if (!data || !data.name || !data.email || !data.password) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    try {
      const user = new User();
      user.name = data.name;
      user.email = data.email;
      user.username = data.username || data.email.split("@")[0];
      user.password = await bc.hash(data.password, 5);
      await user.save();
      return {
        status: true,
        message: "User created successfuly !",
      };
    } catch (e) {
      console.log("error while creating user: ", e);
      return {
        status: false,
        message: "Somethinf went wrong while creating user !",
      };
    }
    return {
      status: false,
    };
  }
}
