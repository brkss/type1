import { Query, Resolver } from "type-graphql";

@Resolver()
export class InviteResolver {
  @Query(() => String)
  invite() {
    return "nope yet!";
  }
}
