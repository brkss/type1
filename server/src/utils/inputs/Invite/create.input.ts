import { InputType, Field } from "type-graphql";
@InputType()
export class CreateRequestInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => [Question])
  questions: Question[];
}

@InputType()
export class Question {
  @Field()
  text: string;

  @Field()
  answers: Answer[];
}

@InputType()
class Answer {
  @Field()
  text: string;
}
