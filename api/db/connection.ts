import { Sequelize } from "sequelize";

const db = new Sequelize('slack-app', 'postgres', 'pacofeli', {
    host: 'localhost',
    dialect: 'postgres',
    // logging: false,
});
// const db = new Sequelize('postgres://postgres:pacofeli:5432/slack-app')
export default db;