import UsuarioModel from '../../domain/models/usuario.model';
import UsuariosLogsRepository from '../../domain/repositories/UsuariosLogsRepository';
import UsuariosReppository from '../../domain/repositories/UsuariosRepository';

const CrearUsuarioController = (usuariosReppository: UsuariosReppository, usuariosLogsRepository: UsuariosLogsRepository ) => async (usuarioNuevo: UsuarioModel) => {

    const usuario = await usuariosReppository.add(usuarioNuevo); 
    usuariosLogsRepository.notifica(usuario);

    return usuario;
}

export default CrearUsuarioController;