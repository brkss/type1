import { InputType, Field } from "type-graphql";

@InputType()
export class RegisterUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  username?: string;

  @Field()
  password: string;
}
