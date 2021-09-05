import { Response } from "express";

export const sendUserRefreshToken = (
  res: Response,
  refreshToken: string
): void => {
  res.cookie("uid", refreshToken, {
    httpOnly: true,
  });
};
