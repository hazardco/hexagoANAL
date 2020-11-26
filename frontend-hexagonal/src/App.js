import { useState, useEffect } from 'react';
import { Usuarios } from './components/Usuarios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const url = "http://localhost:3002/usuarios";

  const notify = () => toast.success("Usuario creado correctamente", {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const [ usuarios, setUsuarios ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ usuario, setUsuario ] = useState({
    id: "",
    nombre: "",
    apellidos: "",
    correo: ""
  })

  useEffect( () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        setUsuarios(data);
        console.log(data);
        setLoading(false);
    });
},[loading])

  const { nombre, apellidos, correo } = usuario;

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
          setLoading(true);
          notify();
          setUsuario({
            id: "",
            nombre: "",
            apellidos: "",
            correo: ""
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
      <ToastContainer />

      <form onSubmit={e => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="nombre" className="form-control" id="nombre" name="nombre" value={nombre} onChange={e => handleChange(e)} placeholder="Nombre"/>
        </div>
        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label">Apellidos</label>
          <input type="apellidos" className="form-control" id="apellidos" name="apellidos" value={apellidos} onChange={e => handleChange(e)} placeholder="Apellidos"/>
        </div>
        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label">Correo electrónico</label>
          <input type="correo" className="form-control" id="correo" name="correo" value={correo} onChange={e => handleChange(e)} placeholder="ejemplo@ejemplo.es"/>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Enviar</button>
        </div>
      </form>
      <hr/>        
      {
        loading ? "Cargando ..."
        :
        <ul>
          <Usuarios usuarios={usuarios}/>
        </ul>  
      }  
    </div>
  );
}

export default App;
