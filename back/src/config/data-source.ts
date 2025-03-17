import { DataSource } from "typeorm";
import { Credential } from "../entities/Credentials";
import { User } from "../entities/User";
import { database, password, username } from "./envs";
import { appointments } from "../entities/appointments";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: username,
  password: password,
  database: database,
  synchronize: true,
  logging: false,
  entities: [User, Credential, appointments],
  subscribers: [],
  migrations: [],
  dropSchema: false,
});
