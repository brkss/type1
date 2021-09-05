"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendUserRefreshToken = void 0;
const sendUserRefreshToken = (res, refreshToken) => {
    res.cookie("uid", refreshToken, {
        httpOnly: true,
    });
};
exports.sendUserRefreshToken = sendUserRefreshToken;
//# sourceMappingURL=sendRefreshToken.js.map