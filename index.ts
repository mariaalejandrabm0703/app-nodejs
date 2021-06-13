//Imports
import Server from './models/server';
//Configuraciones
import dotenv from 'dotenv';
dotenv.config();

// export const nombre = 'Maria'
// console.log(nombre)

const server = new Server();
server.listen();