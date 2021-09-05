import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import { DefaultAuthResponse } from "../utils/responses/default.response";
import { RegisterUserInput } from "../utils/inputs/user/register.input";
import { LoginUserInput } from "../utils/inputs/user/login.input";
import { User } from "../entity/User";
import {
  generateUserAccessToken,
  generateUserRefreshToken,
} from "../utils/helpers/token/generateUserToken";
import bc from "bcrypt";
import { ContextApollo } from "../utils/types/Context";
import { sendUserRefreshToken } from "../utils/helpers/token/sendRefreshToken";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users() {
    return await User.find();
  }

  // login !
  @Mutation(() => DefaultAuthResponse)
  async login(@Arg("data") data: LoginUserInput, @Ctx() ctx: ContextApollo) {
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
      sendUserRefreshToken(ctx.res, generateUserRefreshToken(user));
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
    @Arg("data") data: RegisterUserInput,
    @Ctx() ctx: ContextApollo
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

      // user registered successfuly !
      const _user = await User.findOne({ where: { email: data.email } });
      sendUserRefreshToken(ctx.res, generateUserRefreshToken(_user!));
      return {
        status: true,
        message: "User created successfuly !",
        token: generateUserAccessToken(_user!),
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
