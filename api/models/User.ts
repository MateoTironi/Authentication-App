import { DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('user', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    alias: {
        type: DataTypes.STRING,
        defaultValue: true,
        allowNull: true
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true

    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
    {
        timestamps: false,
    }
)

export default User;