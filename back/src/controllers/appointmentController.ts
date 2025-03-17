import { Request, Response } from "express";
import {
  allTurnsUsers,
  createTurns,
  findTurn,
} from "../services/appointmentsService";
import { turnRole } from "../entities/appointments";
import { appointmentsRepository, userRepository } from "../Repositories";

//GET devuelve todoslos turnos de todos los usuarios
export const Turnos = async (req: Request, res: Response): Promise<void> => {
  try {
    const turnos = await allTurnsUsers();
    res.status(200).json({
      message: `Existen ${turnos.length} turnos en la base de datos `,
      turnos,
    });
  } catch {
    res.status(404).json({ message: "no se reconoce usuario" });
  }
};

//POST agenda nuevo turno
export const newTurn = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      especialidad,
      date,
      time,
      cobertura,
      Estado,
      idUser: User,
    } = req.body;

    const user = await userRepository.findOneBy({ id: User });
    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
    }

    const newTurns = await createTurns({
      especialidad,
      date,
      time,
      cobertura,
      Estado,
      idUser: User,
    });

    if (!especialidad && !date && !time && !cobertura && !Estado) {
      res
        .status(400)
        .json({ message: "error al crear usuario, faltan datos " });
    } else {
      res.status(201).json({
        message: "El turno se creo con exito",
        newTurns: newTurns,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "error en controller", error });
  }
  //// AGREGAR A LOS PARAMETROS EL ID DEL USUARIO
};

//GET devuelve el detalle de un tunro especifico
export const findAppointments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const idTurn = await findTurn(req.params.id);
    if (!idTurn) {
      throw new Error();
    }
    res.status(200).json({ message: "Se encontro turno", idTurn });
  } catch {
    res.status(404).json({ message: "No se encontro turno" });
  }
};

//PUT cambia el estado de un turno a cancelado
export const cancelar = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuario = await findTurn(req.params.id);
    const idUser = usuario?.idUser;
    if (!usuario) {
      res.status(404).json({ message: "No se encontro turno" });
      return;
    } else {
      if (usuario.Estado === "Activo") {
        usuario.Estado = "Cancelado" as turnRole;
        const cambios = await appointmentsRepository.save(usuario);
        res.status(200).json({ message: "Turno cancelado", cambios, idUser });
      } else {
        usuario.Estado = "Activo" as turnRole;
        const cambios = await appointmentsRepository.save(usuario);
        res.status(200).json({ message: "Turno Activo", cambios, idUser });
      }
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "No se pudo realizar la solicitud", error });
  }
};
