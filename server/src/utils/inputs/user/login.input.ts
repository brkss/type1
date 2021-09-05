import { InputType, Field } from "type-graphql";

@InputType()
export class LoginUserInput {
  @Field(() => String)
  ident: string;

  @Field(() => String)
  password: string;
}
