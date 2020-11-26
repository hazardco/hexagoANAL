import { v4 as uuid } from "uuid";
import IUsuarioModel from "../../domain/models/IUsuario.model";
import UsuariosLogsRepository from "../../domain/repositories/IUsuariosLogsRepository";
import UsuariosReppository from "../../domain/repositories/IUsuariosRepository";

const CrearUsuarioController = (usuariosReppository: UsuariosReppository,
                                usuariosLogsRepository: UsuariosLogsRepository ) =>
                                async (usuarioNuevo: IUsuarioModel) => {

    // El uuid deve ir como valueObject en el Domain
    usuarioNuevo.id = uuid();

    const usuario = await usuariosReppository.add(usuarioNuevo);
    usuariosLogsRepository.notifica(usuario);

    return usuario;
};

export default CrearUsuarioController;
