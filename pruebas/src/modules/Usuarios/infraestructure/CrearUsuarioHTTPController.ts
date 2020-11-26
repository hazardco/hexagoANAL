import { Response, Request } from 'express';
import CrearUsuarioController from '../application/CrearUsuarios';

const CrearUsuarioHTTPController = async (request: Request, response: Response) => {

  const { body } = request;
  console.log("--------");
  console.log(body);
  let usuarioNuevo = body;
  
  const usuario = await CrearUsuarioController(usuarioNuevo);

  response.json(usuario);
};

export default CrearUsuarioHTTPController;