import { Request, Response } from "express";
import obtenerUsuariosController from "../application/ObtenerUsuarios";

const ObtenerUsuarioHTTPController = async (request: Request, response: Response) => {

  const { body } = request;
  const usuarios = await obtenerUsuariosController();
  response.json(usuarios);
};

export default ObtenerUsuarioHTTPController;
