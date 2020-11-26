import UsuarioModel from '../../domain/models/usuario.model';
import UsuariosLogsRepository from '../../domain/repositories/UsuariosLogsRepository';
import UsuariosReppository from '../../domain/repositories/UsuariosRepository';
import { v4 as uuid } from 'uuid';


const CrearUsuarioController = (usuariosReppository: UsuariosReppository, usuariosLogsRepository: UsuariosLogsRepository ) => async (usuarioNuevo: UsuarioModel) => {

    // El uuid deve ir como valueObject en el Domain
    usuarioNuevo.id = uuid();

    const usuario = await usuariosReppository.add(usuarioNuevo); 
    usuariosLogsRepository.notifica(usuario);

    return usuario;
}

export default CrearUsuarioController;