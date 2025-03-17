import express, { Application } from "express";
import indexRouter from "./routes/indexRouter";

import cors from "cors";

import morgan from "morgan";

const app: Application = express();

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());

app.use(indexRouter);

//
console.log("ESTAMOS EN SERVER");
//
export default app;
