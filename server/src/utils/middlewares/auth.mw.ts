import { MiddlewareFn } from "type-graphql";
import { ContextApollo } from "../types/Context";
import { verify } from "jsonwebtoken";

export const isUserAuth: MiddlewareFn<ContextApollo> = ({ context }, next) => {
  const authorization = context.req.headers["authorization"];
  if (!authorization) {
    throw new Error("Not authenticated!");
  }

  const token = authorization.split(" ")[1];
  console.log("token :", token);
  if (!token) {
    throw new Error("Invalid token !");
  }

  try {
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    context.payload = payload as any;
  } catch (e) {
    //console.log('middleware invalid token error => ', e);
    throw new Error("Invalid token");
  }

  return next();
};
