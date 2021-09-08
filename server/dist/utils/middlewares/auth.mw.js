"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const isUserAuth = ({ context }, next) => {
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
        const payload = (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_TOKEN_SECRET);
        context.payload = payload;
    }
    catch (e) {
        throw new Error("Invalid token");
    }
    return next();
};
exports.isUserAuth = isUserAuth;
//# sourceMappingURL=auth.mw.js.map