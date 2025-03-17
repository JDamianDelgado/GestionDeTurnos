import { Request, Response, NextFunction } from "express";
import { appointmentDto } from "../dto/appointmentDto";

export const validateTurns = (
  req: Request<unknown, unknown, appointmentDto>,
  res: Response,
  next: NextFunction
) => {
  const { especialidad, date, time, cobertura, idUser } = req.body;
  if (!especialidad || !date || !time || !idUser || cobertura === undefined) {
    res.status(400).json({ message: "Todos los datos son requeridos" });
    return;
  }
  const [hours, minutes] = time.split(":").map(Number);
  const minutesTotal = hours * 60 + minutes;

  const abierto = 7 * 60;
  const cerrado = 19 * 60;
  if (minutesTotal < abierto || minutesTotal > cerrado) {
    res.status(400).json({ message: "El horario de atencion es de 07 a 19hs" });
    return;
  }

  const dayTurn = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  dayTurn.setHours(0, 0, 0, 0);
  const difMiliseg = dayTurn.getTime() - today.getTime();
  const difDay = difMiliseg / (1000 * 60 * 60 * 24);

  if (difDay < 2) {
    res
      .status(400)
      .json({ message: "El turno debe sacarse con 48hs de anticipacion" });
    return;
  }

  const dayWeek = new Date(date).getDay();
  if (dayWeek === 0 || dayWeek === 6) {
    res.status(400).json({
      message: "El horario de atencion es de Lunes a Viernes  de 07 a 19hs",
    });
    return;
  }
  next();
};
