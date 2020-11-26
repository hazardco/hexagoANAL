import IUsuariosLogsRepository from "../../domain/repositories/IUsuariosLogsRepository";

const ObtenerUsuariosController = (usuariosReppository: IUsuariosLogsRepository ) => async () => {

    const usuarios = await usuariosReppository.notifica_todos();

    return usuarios;
};

export default ObtenerUsuariosController;
