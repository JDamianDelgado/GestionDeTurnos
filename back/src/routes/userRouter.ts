import { Router } from "express";
import {
  AllUsers,
  getUsers,
  loginUser,
  RegisterNewUsers,
} from "../controllers/userControllers";
import { validateUserRegister } from "../middleware/validateUserRegister";
import { validateLogin } from "../middleware/validateLogin";
import { validateUser } from "../middleware/validateUser";

export const userRouter: Router = Router();

userRouter.get("/", AllUsers); //llamar todos los usuarios
userRouter.get("/:id", validateUser, getUsers); //llamar usuario en especifico
userRouter.post("/register", validateUserRegister, RegisterNewUsers); //registra nuevo usuario
userRouter.post("/login", validateLogin, loginUser); //inicio de sesion
