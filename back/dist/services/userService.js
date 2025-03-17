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
exports.createNewUser = exports.findUsers = exports.allUsers = void 0;
const index_1 = require("../Repositories/index");
//devuelve todos los usuarios
const allUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const usersFind = yield index_1.userRepository.find();
    return usersFind;
});
exports.allUsers = allUsers;
//funcin que retorne un elemento del arreglo que haya sido identificado por sus id
const findUsers = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const idUser = parseInt(usuario, 10);
    const oneUser = yield index_1.userRepository.findOne({ where: { id: idUser } });
    return oneUser;
});
exports.findUsers = findUsers;
//funcion que cree un nuevo usuario
const createNewUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = index_1.userRepository.create(userData);
    const result = yield index_1.userRepository.save(newUser);
    return result;
});
exports.createNewUser = createNewUser;
