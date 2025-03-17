import { Request, Response } from "express";
import { allUsers, createNewUser, findUsers } from "../services/userService";
import { findCredential, newCredentials } from "../services/credentialService";
import { User } from "../entities/User";
import { Credential } from "../entities/Credentials";
import { credentialRepository, userRepository } from "../Repositories";
import { appointments } from "../entities/appointments";
import { password, username } from "../config/envs";

//devuelve todos los usuarios
export const AllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarios = await allUsers();
    res
      .status(200)
      .json({ message: `se verifico ${usuarios.length} usuarios`, usuarios });
  } catch (error) {
    res.status(400).json({ message: "No pudieron obtenerse los usuarios" });
  }
};

//devuelve usuario segun id
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const idUsers = await findUsers(req.params.id);
  try {
    if (!idUsers) {
      res
        .status(404)
        .json({ message: "no se encontro usuario en la base de datos " });
    } else {
      const turnos = idUsers.idAppointments;
      res.status(200).json({
        message: `se encontro a ${idUsers.name}`,
        idUsers: {
          id: idUsers.id,
          name: idUsers.name,
          email: idUsers.email,
          birthdate: idUsers.birthdate,
          ndni: idUsers.ndni,
          idCredential: idUsers.idCredential.idCredential,
          Appointments: turnos,
        },
      });
    }
  } catch (Error) {
    res.status(400).json({ message: "no se encontro usuario", Error });
  }
};

//nuevo usuario
export const RegisterNewUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newUser: User = await createNewUser(req.body);
    const credencial = await newCredentials(req.body);

    if (!newUser || !credencial) {
      throw new Error("Error al crear el usuario o la credencial.");
    }

    newUser.idCredential = credencial;
    credencial.idUser = newUser;

    await userRepository.save(newUser);
    await credentialRepository.save(credencial);

    res.status(201).json({
      message: `se registra nuevo usuario ${newUser.name}`,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        birthdate: newUser.birthdate,
        ndni: newUser.ndni,
      },
      credential: {
        idCredencial: credencial.idCredential,
        username: credencial.username,
        password: credencial.password,
      },
    });
  } catch (Error) {
    res.status(400).json({ message: "Datos incorrectos", Error });
  }
};

//inicio de sesion
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: Credential | undefined = await findCredential(req.body);
    if (!user) {
      res.status(404).json({
        message: "Credenciales incorrectas. Por favor, inténtelo de nuevo.",
      });
      return;
    } else {
      res.status(200).json({
        message: `Bienvenido ${user.idUser.name}`,
        user,
      });
    }
  } catch (Error) {
    res.status(400).json({
      message:
        "No se encontro las credenciales solicitadas, intentelo de nuevo",
      Error,
    });
  }
}; //MODIFICAR PARA QUE RETORNE DATOS DEL USUARIO Y NO DARTOS DE LA CREDENCIAL
//MODIFICAR APARA QUE APAREZCA DE ESTE MODO
//{"login": true, "user": {} }
