import dotenv from 'dotenv';
import db from './db/connection';
import Server from './models/server';

dotenv.config();

const server = new Server();






// Syncing all the models at once.
db.sync({ force: false, alter: false }).then(() => {
    server.listen();
});