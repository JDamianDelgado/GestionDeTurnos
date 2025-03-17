import { User } from "../entities/User";
import { userRepository } from "../Repositories/index";

//devuelve todos los usuarios
export const allUsers = async (): Promise<User[]> => {
  const usersFind = await userRepository.find({
    relations: ["idCredential", "idAppointments"],
  });
  return usersFind;
};

//funcin que retorne un elemento del arreglo que haya sido identificado por sus id
export const findUsers = async (id: string): Promise<User | undefined> => {
  const idUser = parseInt(id, 10);
  const oneUser = await userRepository.findOne({
    where: { id: idUser },
    relations: ["idCredential", "idAppointments"],
  });

  if (!oneUser) {
    return undefined;
  }
  return oneUser;
};

//funcion que cree un nuevo usuario
export const createNewUser = async (userData: User): Promise<User> => {
  const newUser: User = userRepository.create(userData);
  const result = await userRepository.save(newUser);
  return result;
};
