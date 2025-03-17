"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentsRoutes = void 0;
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
exports.appointmentsRoutes = (0, express_1.Router)();
exports.appointmentsRoutes.get("/", appointmentController_1.Turnos); //obtiene todos los turnos del TODOS los usuarios
exports.appointmentsRoutes.get("/:id", appointmentController_1.findAppointments); //obtiene detalle de turno esepcifico
exports.appointmentsRoutes.post("/schedule", appointmentController_1.newTurn); //agenda nuevo turno
exports.appointmentsRoutes.put("/cancel/:id", appointmentController_1.cancelar); //cambia estado de turno a "cancelled"
