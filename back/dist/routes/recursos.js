"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = require("./userRouter");
const appointmentRouter_1 = require("./appointmentRouter");
const indexRouter = (0, express_1.Router)();
// console.log("estamosn en recursos ");
// indexRouter.get("/users", (req, res) => {
//   res.send("todo ok en recursos");
// });
indexRouter.use("./users", userRouter_1.userRouter);
indexRouter.use("./appointmentRouter/", appointmentRouter_1.appointmentRouter);
exports.default = indexRouter;
