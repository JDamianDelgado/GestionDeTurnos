import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credential } from "./Credentials";
import { appointments } from "./appointments";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  email: string;

  @Column()
  birthdate: Date;

  @Column()
  ndni: number;

  @OneToOne(() => Credential, (credential) => credential.idUser)
  @JoinColumn()
  idCredential: Credential;

  @OneToMany(() => appointments, (appointment) => appointment.idUser)
  @JoinColumn({ name: "idAppointments" })
  idAppointments: appointments[];
}
