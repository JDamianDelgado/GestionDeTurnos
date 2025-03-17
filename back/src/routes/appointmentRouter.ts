import { Router } from "express";
import {
  Turnos,
  cancelar,
  findAppointments,
  newTurn,
} from "../controllers/appointmentController";
import { validateTurns } from "../middleware/validateTurns";

export const appointmentsRoutes = Router();

appointmentsRoutes.get("/", Turnos); //obtiene todos los turnos del TODOS los usuarios
appointmentsRoutes.get("/:id", findAppointments); //obtiene detalle de turno esepcifico
appointmentsRoutes.post("/schedule", validateTurns, newTurn); //agenda nuevo turno
appointmentsRoutes.put("/cancel/:id", cancelar); //cambia estado de turno a "cancelled"
