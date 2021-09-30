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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const typeorm_1 = require("typeorm");
const Request_1 = require("./Request");
const Answer_1 = require("./Answer");
const type_graphql_1 = require("type-graphql");
let Question = class Question extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Question.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Question.prototype, "text", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Question.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Answer_1.Answer]),
    (0, typeorm_1.OneToMany)(() => Answer_1.Answer, (answer) => answer.question),
    __metadata("design:type", Array)
], Question.prototype, "answers", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Request_1.Request),
    (0, typeorm_1.ManyToOne)(() => Request_1.Request, (request) => request.questions),
    __metadata("design:type", Request_1.Request)
], Question.prototype, "request", void 0);
Question = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("questions")
], Question);
exports.Question = Question;
//# sourceMappingURL=Question.js.map