import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
} from "typeorm";
import { Question } from "./Question";

@Entity("answers")
export class Answer extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  text: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Question, (question) => question.answers)
  question: Question[];
}
