import "dotenv/config";
import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user.resolver";
import { InviteResolver } from "./resolvers/invite.resolver";
import { refreshToken } from "./utils/helpers/token/refreshToken";
import cookieParser from "cookie-parser";

(async () => {
  await createConnection();
  const app = express();
  app.use(cookieParser());
  app.get("/", (_, res) => res.send("hello"));
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, InviteResolver],
      validate: true,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  // await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.post("/refresh_token", (req, res) => refreshToken(req, res));
  app.listen(4000, () => {
    console.log("server runing on http://localhost:4000");
  });
})();
