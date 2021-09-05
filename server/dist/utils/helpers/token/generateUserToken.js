"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUserRefreshToken = exports.generateUserAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateUserAccessToken = (user) => {
    const payload = {
        uuid: user.id,
    };
    const token = jsonwebtoken_1.default.sign(payload, process.env.ACCESS_TOKEN_SECRET);
    return token;
};
exports.generateUserAccessToken = generateUserAccessToken;
const generateUserRefreshToken = (user) => {
    const payload = {
        uuid: user.id,
    };
    const token = jsonwebtoken_1.default.sign(payload, process.env.REFRESH_TOKEN_SECRET);
    return token;
};
exports.generateUserRefreshToken = generateUserRefreshToken;
//# sourceMappingURL=generateUserToken.js.map