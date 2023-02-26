"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Message = connection_1.default.define('message', {
    text: {
        type: sequelize_1.DataTypes.STRING,
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    timestamps: false,
});
exports.default = Message;
//# sourceMappingURL=Message.js.map