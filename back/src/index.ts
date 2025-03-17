import app from "./server";

import { PORT } from "./config/envs";

import "reflect-metadata";

import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
  .then((res) => {
    app.listen(PORT, () => {
      console.log(`Estamos en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Hubo un error en el ${PORT}`, error);
  });
