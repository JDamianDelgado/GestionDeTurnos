import { IUser } from "./IUsers";

export enum turnsStatus {
  active = "Active",
  cancelled = "Cancelled",
}

export interface IAppointment {
  // especialidad: string;
  // subespecialidad: string;
  id: number;
  date: Date;
  time: string;
  userId: IUser["id"];
  status: turnsStatus;
}
