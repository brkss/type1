import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
} from "type-graphql";
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
import { isUserAuth } from "../utils/middlewares/auth.mw";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users() {
    return await User.find();
  }

  //@UseMiddleware(isUserAuth)
  @Mutation(() => Boolean)
  async revokeToken(@Arg("uid") uid: string): Promise<boolean> {
    try {
      const user = await User.findOne({ where: { id: uid } });
      if (!user) {
        return false;
      }
      user!.tokenVersion = user!.tokenVersion + 1;
      await user.save();
      return true;
    } catch (e) {
      console.log("something  went wrong revoking user password !", e);
      return false;
    }
  }

  // single user
  @UseMiddleware(isUserAuth)
  @Query(() => User, { nullable: true })
  async user(@Ctx() ctx: ContextApollo) {
    try {
      const user = await User.findOne({ where: { id: ctx.payload.uuid } });
      if (!user) {
        console.log("user not found !");
        return null;
      }
      return user;
    } catch (e) {
      console.log("error while finding the user : ", e);
      return null;
    }
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
