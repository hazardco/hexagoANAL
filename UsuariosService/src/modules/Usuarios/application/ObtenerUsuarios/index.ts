import ObtenerUsuariosController from './ObtenerUsuariosController';
import UsuariosMySQL from '../../infraestructure/UsuariosMySQL';

const usuariosReppository = new UsuariosMySQL();

export default ObtenerUsuariosController(usuariosReppository);