"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/", userControllers_1.AllUsers); //llamar todos los usuarios
exports.userRouter.get("/:id", userControllers_1.getUsers); //llamar usuario en especifico
exports.userRouter.post("/register", userControllers_1.RegisterNewUsers); //registra nuevo usuario
exports.userRouter.put("/login", userControllers_1.loginUser); //inicio de sesion
