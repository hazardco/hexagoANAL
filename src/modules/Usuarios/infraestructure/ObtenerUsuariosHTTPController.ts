import { Response, Request } from 'express';
import ObtenerUsuariosController from '../application/ObtenerUsuarios';

const ObtenerUsuariosHTTPController = async (request: Request, response: Response) => {

  const { body } = request;
  const usuarios = await ObtenerUsuariosController();
  response.json(usuarios);
};

export default ObtenerUsuariosHTTPController;