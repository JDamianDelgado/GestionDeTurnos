import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

export enum turnRole {
  cancel = "Cancelado",
  active = "Activo",
}
@Entity({ name: "appointments" })
export class appointments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  especialidad: string;

  @Column()
  date: Date;

  @Column()
  time: string; //modificar a time o string

  @Column()
  cobertura: boolean;

  @Column({ default: "activo" })
  Estado: turnRole;

  @ManyToOne(() => User, (user) => user.idAppointments)
  @JoinColumn({ name: "idUser" })
  idUser: User;
}
