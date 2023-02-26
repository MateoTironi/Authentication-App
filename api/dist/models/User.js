"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define('user', {
    fullName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    alias: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: true,
        allowNull: true
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
    bio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    contact: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: false,
});
exports.default = User;
//# sourceMappingURL=User.js.map