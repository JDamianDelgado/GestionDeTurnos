import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { Credential } from "../entities/Credentials";
import { appointments } from "../entities/appointments";

export const userRepository = AppDataSource.getRepository(User);
export const credentialRepository = AppDataSource.getRepository(Credential);
export const appointmentsRepository = AppDataSource.getRepository(appointments);
