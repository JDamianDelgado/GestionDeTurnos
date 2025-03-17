import { appointmentsRepository } from "../Repositories/index";
import { appointmentDto } from "../dto/appointmentDto";
import { appointments } from "../entities/appointments";

//funcion que retorne todos los turnos de todos los usuarios
export const allTurnsUsers = async (): Promise<appointments[]> => {
  const allAppointments = await appointmentsRepository.find();
  return allAppointments;
};

//funcion para encontrar usuario por id
export const findTurn = async (iden: string): Promise<appointments | null> => {
  const idAppointment = parseInt(iden, 10);
  const findTurn = await appointmentsRepository.findOne({
    where: { id: idAppointment },
    relations: ["idUser"],
  });
  return findTurn;
};
//funcion para crear un nuevo tunro //debe guardar id de usuario**
export const createTurns = async (
  req: appointmentDto
): Promise<appointments> => {
  const nuevoturno: appointments = appointmentsRepository.create(req);
  const result = await appointmentsRepository.save(nuevoturno);
  return result;
};

//cancelar turno se hizo directamente en controller
