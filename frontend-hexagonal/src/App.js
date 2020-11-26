import { useState } from 'react';
import { Usuarios } from './components/Usuarios';

function App() {

  const url = "http://localhost:3000/usuarios";

  const [ usuario, setUsuario ] = useState({
    id: "",
    nombre: "",
    apellidos: ""
  })

  const { nombre, apellidos } = usuario;

  const handleChange = (e) => {
    e.preventDefault();
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT!!");
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
   })
   .then(function(response) {
      if(response.ok) {
          setUsuario({
            id: "",
            nombre: "",
            apellidos: ""
          })
          return response.text()
      } else {
          throw "Error!!";
      }
  })}

  return (
    <div className="container">
      <h1>Frontend HexagoANAL</h1>
      <hr/>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="nombre" className="form-control" id="nombre" name="nombre" value={nombre} onChange={e => handleChange(e)} placeholder="Luis Miguel"/>
        </div>
        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label">Apellidos</label>
          <input type="apellidos" className="form-control" id="apellidos" name="apellidos" value={apellidos} onChange={e => handleChange(e)} placeholder="Cabezas Granado"/>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Enviar</button>
        </div>
      </form>
      <hr/>
        <ul>
          <Usuarios/>
        </ul>    
    </div>
  );
}

export default App;
