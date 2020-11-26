import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";

import "reflect-metadata";
import {createConnection} from "typeorm";

import CrearUsuarioHTTPController from "./modules/Usuarios/infraestructure/CrearUsuarioHTTPController";
import ObtenerUsuariosHTTPController from "./modules/Usuarios/infraestructure/ObtenerUsuariosHTTPController";

const app = express();
createConnection();

// Middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

const port = 3002;

// Rutas
app.get("/usuarios", ObtenerUsuariosHTTPController);

// app.get('/usuarios/:id', obtenerUsuarioHTTPController);

app.post("/usuarios", CrearUsuarioHTTPController);

app.listen(port, () => {
  // console.log(`Listo on port ${port}`);
});
