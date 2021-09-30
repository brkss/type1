import { InputType, Field } from "type-graphql";

@InputType()
export class CreateRequestInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => [InQuestion])
  questions: InQuestion[];
}

@InputType()
class InQuestion {
  @Field()
  text: string;

  @Field(() => [InAnswer])
  answers: InAnswer[];
}

@InputType()
class InAnswer {
  @Field()
  text: string;
}
