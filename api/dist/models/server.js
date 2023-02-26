"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_1 = __importDefault(require("../routes/usuarios"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
const User_1 = __importDefault(require("./User"));
const Group_1 = __importDefault(require("./Group"));
const Channel_1 = __importDefault(require("./Channel"));
const Message_1 = __importDefault(require("./Message"));
class Server {
    constructor() {
        this.apiPath = {
            usuarios: '/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.DB_HOST || '3000';
        this.dbConnection();
        this.middlewares();
        //Definir mis rutas
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database online');
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //LECTURA DEL BODY
        this.app.use(express_1.default.json());
        //CARPETA PUBLICA
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPath.usuarios, usuarios_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
// DB association
User_1.default.belongsToMany(Group_1.default, { through: 'Group' });
Group_1.default.belongsToMany(User_1.default, { through: 'Group' });
Group_1.default.hasMany(Channel_1.default);
Channel_1.default.belongsTo(Group_1.default);
// User.belongsToMany(Message, {through: 'Message'})
Message_1.default.belongsTo(User_1.default);
Channel_1.default.belongsToMany(Message_1.default, { through: 'Channel_message' });
Group_1.default.belongsToMany(Message_1.default, { through: 'Group_message' });
// Message.belongsTo(Channel)
Channel_1.default.belongsToMany(User_1.default, { through: 'Channel_member' });
exports.default = Server;
//# sourceMappingURL=server.js.map