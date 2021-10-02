import { Arg, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { DefaultInviteResponse } from "../utils/responses/Invite/default.response";
import {
  CreateAbandonedInput,
  CreateRequestInput,
} from "../utils/inputs/Invite/create.input";
import { Request } from "../entity/Invite/Request";
import { Question } from "../entity/Invite/Question";
import { Answer } from "../entity/Invite/Answer";
import { Abandoned } from "../entity/Invite/Abandoned";
import { isUserAuth } from "../utils/middlewares/auth.mw";

@Resolver()
export class InviteResolver {
  @Query(() => String)
  invite() {
    return "nope yet!";
  }

  @UseMiddleware(isUserAuth)
  @Query(() => [Request])
  async requests() {
    return await Request.find({
      relations: ["questions", "questions.answers"],
    });
  }

  @Mutation(() => DefaultInviteResponse)
  async createAbandoned(
    @Arg("data") data: CreateAbandonedInput
  ): Promise<DefaultInviteResponse> {
    if (!data.name || !data.email) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    try {
      const _abandoned = new Abandoned();
      _abandoned.name = data.name;
      _abandoned.email = data.email;
      await _abandoned.save();
      return {
        status: true,
      };
    } catch (e) {
      console.log("something went wrong in [abandoned] ", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }

  @Mutation(() => DefaultInviteResponse)
  async createRequest(
    @Arg("data") data: CreateRequestInput
  ): Promise<DefaultInviteResponse> {
    if (!data.name || !data.email || data.questions.length == 0) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    try {
      const request = new Request();
      request.name = data.name;
      request.email = data.email;
      await request.save();
      for (let q of data.questions) {
        if (q.text || q.answers.length == 0) {
          const _question = new Question();
          _question.text = q.text;
          _question.request = request;
          await _question.save();
          for (let a of q.answers) {
            const _answer = new Answer();
            _answer.text = a.text;
            _answer.question = _question;
            await _answer.save();
          }
        }
      }
      return {
        status: true,
      };
    } catch (e) {
      console.log("something went wrong creating request : ", e);
      return {
        status: false,
        message: "Something went wrong :(",
      };
    }
  }
}
