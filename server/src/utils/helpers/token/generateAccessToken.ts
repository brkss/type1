import { User } from "../../../entity/User";
import jwt from "jsonwebtoken";

export const generateUserAccessToken = (user: User): String => {
  const payload = {
    uuid: user.id,
  };
  const tmp_access_secret = "fdghbndslkfjbjadsjlklwertyXGFCVBNMLGh3456789";
  const token = jwt.sign(payload, tmp_access_secret);

  return token;
};
