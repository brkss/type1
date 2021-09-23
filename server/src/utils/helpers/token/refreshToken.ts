import { Request, Response } from "express";
import { User } from "../../../entity/User";
import {
  generateUserRefreshToken,
  generateUserAccessToken,
} from "./generateUserToken";
import { sendUserRefreshToken } from "./sendRefreshToken";
import jwt from "jsonwebtoken";

export const refreshToken = async (req: Request, res: Response) => {
  // get token from the cookie
  console.log("user cookie : ", req.cookies.uid);
  //const token = req.cookies.uid;
  const token = req.headers.refresh_token as string;
  if (!token) {
    return res.send({
      status: false,
      token: "",
    });
  }

  // parse token !
  console.log("found a token : ", token);
  let payload: any;
  try {
    payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!) as any;
    console.log("token payload : ", payload);
  } catch (e) {
    console.log("prob invalid token ! e =>>> ", e);
    return res.send({
      status: false,
      token: "",
    });
  }
  if (!payload) {
    return res.send({
      status: false,
      token: "invalid payload !",
    });
  }

  // verify user !
  const user = await User.findOne({ where: { id: payload!.uuid } });
  if (!user) {
    return res.send({
      status: false,
      token: "invalid user!",
    });
  }

  // check token version
  if (user!.tokenVersion !== payload.version) {
    return res.send({
      status: false,
      token: "invalid version !",
    });
  }

  // token is valid
  const new_token = generateUserRefreshToken(user!);
  //  sendUserRefreshToken(res, new_token);
  return res.send({
    status: true,
    token: generateUserAccessToken(user!),
    //refreshToken: generateUserRefreshToken(user!),
  });
};
