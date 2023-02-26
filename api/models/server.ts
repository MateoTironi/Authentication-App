import express, { Application } from 'express';
import userRoutes from '../routes/usuarios';
import cors from 'cors'
import db from '../db/connection';
import User from './User';
import Group from './Group';
import Channel from './Channel';
import Message from './Message';

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

// DB association
User.belongsToMany(Group, {through: 'Group'})
Group.belongsToMany(User, {through: 'Group'})   

Group.hasMany(Channel)
Channel.belongsTo(Group)

// User.belongsToMany(Message, {through: 'Message'})
Message.belongsTo(User)

Channel.belongsToMany(Message, {through: 'Channel_message'})
Group.belongsToMany(Message, {through: 'Group_message'})
// Message.belongsTo(Channel)

Channel.belongsToMany(User, {through: 'Channel_member'})


export default Server;