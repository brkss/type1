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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteResolver = void 0;
const type_graphql_1 = require("type-graphql");
const default_response_1 = require("../utils/responses/Invite/default.response");
const create_input_1 = require("../utils/inputs/Invite/create.input");
const Request_1 = require("../entity/Invite/Request");
const Question_1 = require("../entity/Invite/Question");
const Answer_1 = require("../entity/Invite/Answer");
let InviteResolver = class InviteResolver {
    invite() {
        return "nope yet!";
    }
    async requests() {
        return await Request_1.Request.find({
            relations: ["questions", "questions.answers"],
        });
    }
    async createRequest(data) {
        if (!data.name || !data.email || data.questions.length == 0) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        try {
            const request = new Request_1.Request();
            request.name = data.name;
            request.email = data.email;
            await request.save();
            for (let q of data.questions) {
                if (q.text || q.answers.length == 0) {
                    const _question = new Question_1.Question();
                    _question.text = q.text;
                    _question.request = request;
                    await _question.save();
                    for (let a of q.answers) {
                        const _answer = new Answer_1.Answer();
                        _answer.text = a.text;
                        _answer.question = _question;
                        await _answer.save();
                    }
                }
            }
            return {
                status: true,
            };
        }
        catch (e) {
            console.log("something went wrong creating request : ", e);
            return {
                status: false,
                message: "Something went wrong :(",
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InviteResolver.prototype, "invite", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Request_1.Request]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InviteResolver.prototype, "requests", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => default_response_1.DefaultInviteResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_input_1.CreateRequestInput]),
    __metadata("design:returntype", Promise)
], InviteResolver.prototype, "createRequest", null);
InviteResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], InviteResolver);
exports.InviteResolver = InviteResolver;
//# sourceMappingURL=invite.resolver.js.map