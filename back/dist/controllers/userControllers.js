"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.RegisterNewUsers = exports.getUsers = exports.AllUsers = void 0;
const userService_1 = require("../services/userService");
const credentialService_1 = require("../services/credentialService");
const console_1 = require("console");
//devuelve todos los usuarios
const AllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield (0, userService_1.allUsers)();
        res
            .status(200)
            .json({ message: `se verifico ${usuarios.length} usuarios`, usuarios });
    }
    catch (error) {
        res.status(400).json({ message: "No pudieron obtenerse los usuarios" });
    }
});
exports.AllUsers = AllUsers;
//devuelve usuario segun id
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUsers = yield (0, userService_1.findUsers)(req.params.id);
        if (idUsers) {
            const { idCredential } = idUsers;
            res.status(200).json({
                message: `se recupero ${idUsers.name}, username ${idCredential.username} con id N° ${idCredential}`,
                idUsers,
            });
        }
        else {
            res.status(400).json({ message: "no se encontro usuario" });
        }
    }
    catch (Error) {
        res.status(400).json({ message: "no se encontro usuario", error: console_1.error });
    }
});
exports.getUsers = getUsers;
//nuevo usuario
const RegisterNewUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const credencial = yield (0, credentialService_1.newCredentials)(req.body);
    const newUser = yield (0, userService_1.createNewUser)(req.body);
    //se agrega servicio para crear credencial
    res.status(200).json({
        message: `se registra nuevo usuario ${newUser.name} con credencial Nro ${credencial}`,
        User: newUser,
    });
});
exports.RegisterNewUsers = RegisterNewUsers;
//inicio de sesion // uso de controlador par iniciar con username y password
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const check = yield (0, credentialService_1.findCredential)(req.body);
        if (!check) {
            throw new Error("No se encontro credenciales");
        }
        else {
            res.status(200).json({
                message: `Bienvenido ${check.username}, recuerda que tu N°de credencial es: ${check.idCredential}`,
                check,
            });
        }
    }
    catch (Error) {
        res.status(500).json({
            message: "No se encontro las credenciales solicitadas, intentelo de nuevo",
            Error,
        });
    }
});
exports.loginUser = loginUser;
