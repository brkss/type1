"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUserAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateUserAccessToken = (user) => {
    const payload = {
        uuid: user.id,
    };
    const tmp_access_secret = "fdghbndslkfjbjadsjlklwertyXGFCVBNMLGh3456789";
    const token = jsonwebtoken_1.default.sign(payload, tmp_access_secret);
    return token;
};
exports.generateUserAccessToken = generateUserAccessToken;
//# sourceMappingURL=generateAccessToken.js.map