import { Mutation, Query, Resolver } from "type-graphql";
import { DefaultInviteResponse } from "../utils/responses/Invite/default.response";

@Resolver()
export class InviteResolver {
  @Query(() => String)
  invite() {
    return "nope yet!";
  }

  @Mutation(() => DefaultInviteResponse)
  async createRequest();
}
