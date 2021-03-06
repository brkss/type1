"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const user_resolver_1 = require("./resolvers/user.resolver");
const invite_resolver_1 = require("./resolvers/invite.resolver");
const refreshToken_1 = require("./utils/helpers/token/refreshToken");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
(async () => {
    await (0, typeorm_1.createConnection)();
    const app = (0, express_1.default)();
    app.use((0, cookie_parser_1.default)());
    app.get("/", (_, res) => res.send("hello"));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [user_resolver_1.UserResolver, invite_resolver_1.InviteResolver],
            validate: true,
        }),
        context: ({ req, res }) => ({ req, res }),
    });
    apolloServer.applyMiddleware({ app });
    app.post("/refresh_token", (req, res) => (0, refreshToken_1.refreshToken)(req, res));
    app.listen(4000, () => {
        console.log("server runing on http://localhost:4000");
    });
})();
//# sourceMappingURL=index.js.map