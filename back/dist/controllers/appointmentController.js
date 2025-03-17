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
exports.cancelar = exports.findAppointments = exports.newTurn = exports.Turnos = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
const User_1 = require("../entities/User");
const Repositories_1 = require("../Repositories");
//GET devuelve todoslos turnos de todos los usuarios
const Turnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turnos = yield (0, appointmentsService_1.allTurnsUsers)();
        res.status(200).json({ message: "todos los turnos del usuario", turnos });
    }
    catch (_a) {
        res.status(400).json({ message: "no se reconoce usuario" });
    }
});
exports.Turnos = Turnos;
//POST agenda nuevo turno
const newTurn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { especialidad, date, time, cobertura, turno } = req.body;
        const newTurns = yield (0, appointmentsService_1.createTurns)({
            especialidad,
            date,
            time,
            cobertura,
            turno,
        });
        if (!especialidad && !date && !time && !cobertura && !turno) {
            res
                .status(400)
                .json({ message: "error al crear usuario, faltan datos " });
        }
        else {
            res.status(200).json({
                message: "El turno se creo con exito",
                newTurns: newTurns,
                id: User_1.User,
            });
        }
    }
    catch (error) {
        res.status(400).json({ message: "error en controller", error });
    }
});
exports.newTurn = newTurn;
//GET devuelve el detalle de un tunro especifico
const findAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idTurn = yield (0, appointmentsService_1.findTurn)(req.params.id);
        if (!idTurn) {
            throw new Error();
        }
        res.status(200).json({ message: "Se encontro turno", idTurn });
    }
    catch (_a) {
        res.status(400).json({ message: "No se encontro turno" });
    }
});
exports.findAppointments = findAppointments;
//PUT cambia el estado de un turno a cancelado
const cancelar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield (0, appointmentsService_1.findTurn)(req.params.id);
        const idUser = usuario === null || usuario === void 0 ? void 0 : usuario.idUser;
        if (!usuario) {
            res.status(400).json({ message: "No se encontro turno" });
            return;
        }
        else {
            if (usuario.turno === "Activo") {
                usuario.turno = "Cancelado";
                const cambios = yield Repositories_1.appointmentsRepository.save(usuario);
                res.status(200).json({ message: "Turno cancelado", cambios, idUser });
            }
            else {
                usuario.turno = "Activo";
                const cambios = yield Repositories_1.appointmentsRepository.save(usuario);
                res.status(200).json({ message: "Turno Activo", cambios, idUser });
            }
        }
    }
    catch (error) {
        res
            .status(400)
            .json({ message: "No se pudo realizar la solicitud", error });
    }
});
exports.cancelar = cancelar;
