import { Router } from "express";
import { userRouter } from "./userRouter";
import { appointmentsRoutes } from "./appointmentRouter";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/appointments", appointmentsRoutes);

export default indexRouter;
