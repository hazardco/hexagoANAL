import { Request, Response } from "express";
import CrearUsuarioController from "../application/CrearUsuarios";

const CrearUsuarioHTTPController = async (request: Request, response: Response) => {

  const { body } = request;
  // console.log("--------");
  // console.log(body);
  const usuarioNuevo = body;

  const usuario = await CrearUsuarioController(usuarioNuevo);

  response.json(usuario);
};

export default CrearUsuarioHTTPController;
