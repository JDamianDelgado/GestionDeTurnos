import { Request, Response, NextFunction } from "express";
import { IUserDto } from "../dto/UserDto";
import { credentialRepository, userRepository } from "../Repositories";

export const validateUserRegister = async (
  req: Request<unknown, unknown, IUserDto>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name, email, birthdate, ndni, username, password } = req.body;

  if (!name || !email || !birthdate || !ndni || !username || !password) {
    res.status(400).json({ message: "Todos los datos son requeridos" });
    return;
  }

  const ageUser = new Date(birthdate);
  const today = new Date();
  const actualEdad = today.getFullYear() - ageUser.getFullYear();

  if (actualEdad < 18) {
    res
      .status(400)
      .json({ message: "Debes ser mayor de 18 años para registrarte" });
    return;
  }

  if (password.length < 8 && password) {
    res
      .status(400)
      .json({ message: "La contraseña debe tener al menos 8 caracteres" });
    return;
  }
  const passCharact = /^(?=.*[A-Za-z])(?=.*\d).+$/;
  if (!passCharact.test(password)) {
    res.status(400).json({
      message:
        "La contraseña debe incluir al menos un carácter alfabético y un número",
    });
    return;
  }

  const existingUser = await userRepository.findOne({ where: { email } });
  if (existingUser) {
    res.status(400).json({ message: "El correo ya está en uso" });
    return;
  }

  const existingUsername = await credentialRepository.findOne({
    where: { username },
  });
  if (existingUsername) {
    res.status(400).json({ message: "Username no disponible, escoga otro" });
    return;
  }
  if (username.length < 8) {
    res
      .status(400)
      .json({ message: "El user debe tener al menos 8 caracteres" });
    return;
  }

  // aumentar el mes para verificar si no cumple en el mismo ano
  next();
};
