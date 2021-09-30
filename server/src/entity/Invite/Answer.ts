import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
} from "typeorm";
import { Question } from "./Question";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity("answers")
export class Answer extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  text: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field(() => Question)
  @ManyToOne(() => Question, (question) => question.answers)
  question: Question;
}
