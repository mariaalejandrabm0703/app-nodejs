import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import cors from 'cors';
class Server {
  private app: Application;
  private port: string;
  private paths = {
    usuarios: "/api/usuarios",
  };
  constructor() {
    this.app = express();    
    this.port = process.env.PORT || "5001";
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(cors()); // config default del cors
    this.app.use(express.json()) // me parse el body en json
    this.app.use(express.static('public'))//carpeta publica
  }
  routes() {
    this.app.use(this.paths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en " + this.port);
    });
  }
}

export default Server;
