"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = void 0;
const User_1 = require("../../../entity/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const refreshToken = async (req, res) => {
    console.log("user cookie : ", req.cookies.uid);
    const token = req.cookies.uid;
    if (!token) {
        res.send({
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
        res.send({
            status: false,
            token: "",
        });
    }
    if (!payload) {
        res.send({
            status: false,
            token: "invalid payload !",
        });
    }
    const user = await User_1.User.findOne({ where: { id: payload.uuid } });
    if (!user) {
        res.send({
            status: false,
            token: "invalid user!",
        });
    }
    if (user.tokenVersion !== payload.version) {
        res.send({
            status: false,
            token: "invalid version !",
        });
    }
    res.send({
        status: true,
        token: "wertyuiop",
    });
};
exports.refreshToken = refreshToken;
//# sourceMappingURL=refreshToken.js.map