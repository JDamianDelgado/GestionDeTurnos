"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Credentials_1 = require("../entities/Credentials");
const User_1 = require("../entities/User");
const envs_1 = require("./envs");
const appointments_1 = require("../entities/appointments");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: envs_1.username,
    password: envs_1.password,
    database: envs_1.database,
    synchronize: true,
    logging: true,
    entities: [User_1.User, Credentials_1.Credential, appointments_1.appointments],
    subscribers: [],
    migrations: [],
    dropSchema: false,
});
