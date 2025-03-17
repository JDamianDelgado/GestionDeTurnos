import { Request, Response, NextFunction } from "express";
import { userRepository } from "../Repositories";

export const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "Id no existe" });
    return;
  }
  next();
};
