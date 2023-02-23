import express, { Application } from 'express';
import userRoutes from '../routes/usuarios';
import cors from 'cors'
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPath = {
        usuarios: '/usuarios'
    }
    
    constructor(){
        this.app = express();
        this.port = process.env.DB_HOST || '3000';  
        this.dbConnection();
        this.middlewares();
        //Definir mis rutas
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database online')

        } catch (err: any) {
            throw new Error(err)
        }
    }

    middlewares(){
        //CORS
        this.app.use( cors() )
        //LECTURA DEL BODY
        this.app.use( express.json() )
        //CARPETA PUBLICA
        this.app.use( express.static('public') )
    }

    routes(){
        this.app.use(this.apiPath.usuarios, userRoutes)
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto ' + this.port)
        })
    }

}

export default Server;