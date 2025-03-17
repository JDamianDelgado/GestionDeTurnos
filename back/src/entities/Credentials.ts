import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity({ name: "credentials" })
export class Credential {
  @PrimaryGeneratedColumn()
  idCredential: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne(() => User)
  @JoinColumn()
  idUser: User;
}
