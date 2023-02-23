"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('slack-app', 'postgres', 'pacofeli', {
    host: 'localhost',
    dialect: 'postgres',
    // logging: false,
});
// const db = new Sequelize('postgres://postgres:pacofeli:5432/slack-app')
exports.default = db;
//# sourceMappingURL=connection.js.map