"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const generateAccessToken_1 = require("../utils/helpers/token/generateAccessToken");
const bcrypt_1 = __importDefault(require("bcrypt"));
let UserResolver = class UserResolver {
    async users() {
        return await User_1.User.find();
    }
    async login(data) {
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
            return {
                status: true,
                message: "Login Successfuly !",
                token: (0, generateAccessToken_1.generateUserAccessToken)(user),
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
    async register(data) {
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
            return {
                status: true,
                message: "User created successfuly !",
            };
        }
        catch (e) {
            console.log("error while creating user: ", e);
            return {
                status: false,
                message: "Somethinf went wrong while creating user !",
            };
        }
        return {
            status: false,
        };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => default_response_1.DefaultAuthResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.LoginUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => default_response_1.DefaultAuthResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_input_1.RegisterUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map