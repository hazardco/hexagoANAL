import CrearUsuarioController from './CrearUsuarioController';
import UsuariosMySQL from '../../infraestructure/UsuariosMySQL';
import UsuariosLogs from '../../infraestructure/UsuariosLogs';

const usuariosRepository = new UsuariosMySQL();
const usuariosLogsRepository = new UsuariosLogs();

export default CrearUsuarioController(usuariosRepository, usuariosLogsRepository);