"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = void 0;
const User_1 = require("../../../entity/User");
const generateUserToken_1 = require("./generateUserToken");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const refreshToken = async (req, res) => {
    console.log("user cookie : ", req.cookies.uid);
    const token = req.headers.refresh_token;
    if (!token) {
        return res.send({
            status: false,
            token: "",
        });
    }
    console.log("found a token : ", token);
    let payload;
    try {
        payload = jsonwebtoken_1.default.verify(token, process.env.REFRESH_TOKEN_SECRET);
        console.log("token payload : ", payload);
    }
    catch (e) {
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
    const user = await User_1.User.findOne({ where: { id: payload.uuid } });
    if (!user) {
        return res.send({
            status: false,
            token: "invalid user!",
        });
    }
    if (user.tokenVersion !== payload.version) {
        return res.send({
            status: false,
            token: "invalid version !",
        });
    }
    const new_token = (0, generateUserToken_1.generateUserRefreshToken)(user);
    return res.send({
        status: true,
        token: (0, generateUserToken_1.generateUserAccessToken)(user),
    });
};
exports.refreshToken = refreshToken;
//# sourceMappingURL=refreshToken.js.map