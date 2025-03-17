import { Request, Response, NextFunction } from "express";
import { credentialDto } from "../dto/credentialDto";

export const validateLogin = (
  req: Request<unknown, unknown, credentialDto>,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Todos los datos son requeridos" });
    return;
  }
  next();
};
