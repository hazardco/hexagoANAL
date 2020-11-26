import UsuariosReppository from '../../domain/repositories/usuariosRepository';



const ObtenerUsuariosController = (usuariosReppository: UsuariosReppository ) => async () => {
    const usuarios = await usuariosReppository.getAll();

    return usuarios;
}

export default ObtenerUsuariosController;