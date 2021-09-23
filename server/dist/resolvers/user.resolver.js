"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const default_response_1 = require("../utils/responses/default.response");
const register_input_1 = require("../utils/inputs/user/register.input");
const login_input_1 = require("../utils/inputs/user/login.input");
const User_1 = require("../entity/User");
const generateUserToken_1 = require("../utils/helpers/token/generateUserToken");
const bcrypt_1 = __importDefault(require("bcrypt"));
const sendRefreshToken_1 = require("../utils/helpers/token/sendRefreshToken");
const auth_mw_1 = require("../utils/middlewares/auth.mw");
const jwt = __importStar(require("jsonwebtoken"));
let UserResolver = class UserResolver {
    ping() {
        return "p000ong";
    }
    async users() {
        return await User_1.User.find();
    }
    async revokeToken(uid) {
        try {
            const user = await User_1.User.findOne({ where: { id: uid } });
            if (!user) {
                return false;
            }
            user.tokenVersion = user.tokenVersion + 1;
            await user.save();
            return true;
        }
        catch (e) {
            console.log("something  went wrong revoking user password !", e);
            return false;
        }
    }
    async user(ctx) {
        try {
            const user = await User_1.User.findOne({ where: { id: ctx.payload.uuid } });
            if (!user) {
                console.log("user not found !");
                return null;
            }
            return user;
        }
        catch (e) {
            console.log("error while finding the user : ", e);
            return null;
        }
    }
    async login(data, ctx) {
        if (!data.ident || !data.password) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        try {
            const user = await User_1.User.findOne({
                where: [{ email: data.ident }, { username: data.ident }],
            });
            if (!user) {
                return {
                    status: false,
                    message: "No user found with this ident",
                };
            }
            const validate = await bcrypt_1.default.compare(data.password, user.password);
            if (!validate) {
                return {
                    status: false,
                    message: "Invalid password !",
                };
            }
            (0, sendRefreshToken_1.sendUserRefreshToken)(ctx.res, (0, generateUserToken_1.generateUserRefreshToken)(user));
            return {
                status: true,
                message: "Login Successfuly !",
                token: (0, generateUserToken_1.generateUserAccessToken)(user),
                refreshToken: (0, generateUserToken_1.generateUserRefreshToken)(user),
            };
        }
        catch (e) {
            console.log("something went wrong on login !", e);
            return {
                status: false,
                message: "Something went wrong!",
            };
        }
    }
    async register(data, ctx) {
        if (!data || !data.name || !data.email || !data.password) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        try {
            const user = new User_1.User();
            user.name = data.name;
            user.email = data.email;
            user.username = data.username || data.email.split("@")[0];
            user.password = await bcrypt_1.default.hash(data.password, 5);
            await user.save();
            const _user = await User_1.User.findOne({ where: { email: data.email } });
            (0, sendRefreshToken_1.sendUserRefreshToken)(ctx.res, (0, generateUserToken_1.generateUserRefreshToken)(_user));
            return {
                status: true,
                message: "User created successfuly !",
                token: (0, generateUserToken_1.generateUserAccessToken)(_user),
                refreshToken: (0, generateUserToken_1.generateUserRefreshToken)(_user),
            };
        }
        catch (e) {
            console.log("error while creating user: ", e);
            return {
                status: false,
                message: "Somethinf went wrong while creating user !",
            };
        }
    }
    async refreshToken(token) {
        if (!token) {
            return {
                status: false,
            };
        }
        let payload;
        try {
            payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
            console.log("token payload : ", payload);
        }
        catch (e) {
            console.log("prob invalid token ! e =>>> ", e);
            return {
                status: false,
                token: "",
            };
        }
        if (!payload) {
            return {
                status: false,
                token: "invalid payload !",
            };
        }
        const user = await User_1.User.findOne({ where: { id: payload.uuid } });
        if (!user) {
            return {
                status: false,
                token: "invalid user!",
            };
        }
        if (user.tokenVersion !== payload.version) {
            return {
                status: false,
                token: "invalid version !",
            };
        }
        const new_token = (0, generateUserToken_1.generateUserRefreshToken)(user);
        return {
            status: true,
            token: (0, generateUserToken_1.generateUserAccessToken)(user),
            refreshToken: new_token,
        };
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "ping", null);
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("uid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "revokeToken", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Query)(() => User_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => default_response_1.DefaultAuthResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.LoginUserInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => default_response_1.DefaultAuthResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_input_1.RegisterUserInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => default_response_1.DefaultAuthResponse),
    __param(0, (0, type_graphql_1.Arg)("refresh_token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "refreshToken", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map