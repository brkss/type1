import { User } from "../../../entity/User";
import jwt from "jsonwebtoken";

export const generateUserAccessToken = (user: User): string => {
  const payload = {
    uuid: user.id,
  };
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as any, {
    expiresIn: "12h",
  });

  return token;
};

export const generateUserRefreshToken = (user: User): string => {
  const payload = {
    uuid: user.id,
    version: user.tokenVersion,
  };
  const token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as any, {
    expiresIn: "10d",
  });
  return token;
};
