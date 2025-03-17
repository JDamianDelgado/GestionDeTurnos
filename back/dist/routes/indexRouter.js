"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = require("./userRouter");
const appointmentRouter_1 = require("./appointmentRouter");
const indexRouter = (0, express_1.Router)();
indexRouter.use("/users", userRouter_1.userRouter);
indexRouter.use("/appointments", appointmentRouter_1.appointmentsRoutes);
exports.default = indexRouter;
