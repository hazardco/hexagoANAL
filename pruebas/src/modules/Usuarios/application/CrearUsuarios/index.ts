import CrearUsuarioController from './CrearUsuarioController';
import UsuariosMySQL from '../../infraestructure/UsuariosMySQL';
import UsuariosLogs from '../../infraestructure/UsuariosLogs';
import UsuariosRabbit from '../../infraestructure/UsuariosRabbit';

const usuariosRepository = new UsuariosMySQL();
//const usuariosLogsRepository = new UsuariosLogs();
const usuariosLogsRepository = new UsuariosRabbit();


export default CrearUsuarioController(usuariosRepository, usuariosLogsRepository);