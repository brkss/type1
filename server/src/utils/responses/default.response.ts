import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class DefaultAuthResponse {
  @Field()
  status: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  token?: string;

  @Field({ nullable: true })
  refreshToken?: string;
}
