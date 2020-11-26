import { useEffect, useState } from 'react';

export const Usuarios = ({usuarios}) => {

    console.log(usuarios);

    return (
        <>
            {
            usuarios.map( usuario => (
            <li key={usuario.id}>{usuario.id} || {usuario.nombre} {usuario.apellidos} : <strong>{usuario.correo}</strong></li>
            ))
            }
        </>
    )
}