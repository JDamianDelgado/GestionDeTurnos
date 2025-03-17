import { User } from "../entities/User";

enum turnRole {
  cancel = "Cancelado",
  active = "Activo",
}
export interface appointmentDto {
  especialidad: string;
  date: Date;
  time: string;
  cobertura: boolean;
  Estado: turnRole;
  idUser: User;
}
