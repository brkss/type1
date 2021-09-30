import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class DefaultInviteResponse {
  @Field()
  status: boolean;

  @Field({ nullable: true })
  message?: string;
}
