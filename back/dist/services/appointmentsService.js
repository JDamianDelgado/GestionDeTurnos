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
exports.createTurns = exports.findTurn = exports.allTurnsUsers = void 0;
const index_1 = require("../Repositories/index");
//funcion que retorne todos los turnos de todos los usuarios
const allTurnsUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield index_1.appointmentsRepository.find();
    return allAppointments;
});
exports.allTurnsUsers = allTurnsUsers;
//funcion para encontrar usuario por id
const findTurn = (iden) => __awaiter(void 0, void 0, void 0, function* () {
    const idAppointment = parseInt(iden, 10);
    const findTurn = yield index_1.appointmentsRepository.findOne({
        where: { id: idAppointment },
    });
    return findTurn;
});
exports.findTurn = findTurn;
//funcion para crear un nuevo tunro //debe guardar id de usuario**
const createTurns = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoturno = index_1.appointmentsRepository.create(req);
    const result = yield index_1.appointmentsRepository.save(nuevoturno);
    return result;
});
exports.createTurns = createTurns;
//cancelar turno se hizo directamente en controller
