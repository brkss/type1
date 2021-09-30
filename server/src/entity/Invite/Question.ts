import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Request } from "./Request";
import { Answer } from "./Answer";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity("questions")
export class Question extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  text: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field(() => [Answer])
  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];

  @Field(() => Request)
  @ManyToOne(() => Request, (request) => request.questions)
  request: Request;
}
