import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Question } from "./Question";

@Entity("requests")
export class Request extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Question, (question) => question.request)
  questions: Question[];
}
