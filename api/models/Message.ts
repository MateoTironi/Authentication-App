import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Message = db.define('message', {
    text: {
        type: DataTypes.STRING,
    },
    img:{
        type: DataTypes.STRING,
        allowNull: true,
    }
},
    {
        timestamps: false,
    }
)

export default Message;