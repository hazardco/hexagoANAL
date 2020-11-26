import IUsuariosReppository from "../../domain/repositories/IUsuariosRepository";

const ObtenerUsuariosController = (usuariosReppository: IUsuariosReppository ) => async () => {
    const usuarios = await usuariosReppository.getAll();

    return usuarios;
};

export default ObtenerUsuariosController;
