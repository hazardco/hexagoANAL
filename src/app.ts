import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import 'reflect-metadata';
import {createConnection} from "typeorm";




import ObtenerUsuariosHTTPController from './modules/Usuarios/infraestructure/ObtenerUsuariosHTTPController';
import CrearUsuarioHTTPController from './modules/Usuarios/infraestructure/MySQL/CrearUsuarioHTTPController';

const app = express();
createConnection();

//Middlewares 

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());


const port = 3000;


//Rutas
app.get('/usuarios', ObtenerUsuariosHTTPController);

//app.get('/usuarios/:id', obtenerUsuarioHTTPController);

app.post('/usuarios', CrearUsuarioHTTPController);


app.listen(port, () => {
    console.info(`Listo on port ${port}`);
  });