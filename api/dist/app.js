"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./db/connection"));
const server_1 = __importDefault(require("./models/server"));
dotenv_1.default.config();
const server = new server_1.default();
// Syncing all the models at once.
connection_1.default.sync({ force: false, alter: false }).then(() => {
    server.listen();
});
//# sourceMappingURL=app.js.map