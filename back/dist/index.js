"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
require("reflect-metadata");
const data_source_1 = require("./config/data-source");
// app.listen(PORT, () => {
//   console.log(`Estamos en el puerto ${PORT}`);
// });
data_source_1.AppDataSource.initialize().then((res) => {
    console.log("conexion a la bdd exitosa");
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`Estamos en el puerto ${envs_1.PORT}`);
    });
});
