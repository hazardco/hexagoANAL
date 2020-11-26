import { useEffect, useState } from 'react';

export const Usuarios = () => {

    const [ usuarios, setUsuarios ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const url = "http://localhost:3000/usuarios";

    useEffect( () => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setUsuarios(data);
            setLoading(false);
        });
    })

    return (
        <>
        {
            loading ? "Cargando ..."
            :
            
                usuarios.map( usuario => (
                    <li key={usuario.id}>{usuario.id} || {usuario.nombre} {usuario.apellidos}</li>
                ))
            
        }
        </>
    )
}