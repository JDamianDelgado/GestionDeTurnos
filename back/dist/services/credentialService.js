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
exports.findCredential = exports.newCredentials = void 0;
const index_1 = require("../Repositories/index");
//fucnion que reciba username  password y cree un par de credecniales con estos datos , debe retornar id del pard ecredenciales creado
const newCredentials = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredencial = index_1.credentialRepository.create(userData);
    const result = yield index_1.credentialRepository.save(newCredencial);
    return newCredencial.idCredential;
});
exports.newCredentials = newCredentials;
// funcion que reciba username y password para chequear si usuario existe entre los disoponibles y si es asi si el password es correcto , en caso de que la validacion sea exitosa retornar el id de credenciales
const findCredential = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = userData;
    const usuario = yield index_1.credentialRepository.findOne({
        where: { username: username },
    });
    if (usuario) {
        if (usuario.password === password) {
            return usuario;
        }
    }
    return undefined;
});
exports.findCredential = findCredential;
