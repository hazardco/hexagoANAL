import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import ObtenerUsuariosHTTPController from "./modules/Correos/infraestructure/ObtenerUsuariosHTTPController";




const app = express();

// Middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

const port = 3001;

// Rutas
app.get("/correos", ObtenerUsuariosHTTPController);



app.listen(port, () => {
  console.log(`Listo on port ${port}`);
});