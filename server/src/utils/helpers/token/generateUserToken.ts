import { User } from "../../../entity/User";
import jwt from "jsonwebtoken";

export const generateUserAccessToken = (user: User): String => {
  const payload = {
    uuid: user.id,
  };
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as any);

  return token;
};

export const generateUserRefreshToken = (user: User): String => {
  const payload = {
    uuid: user.id,
  };
  const token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as any);
  return token;
};
