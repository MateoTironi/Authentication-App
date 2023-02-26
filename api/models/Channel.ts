import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Channel = db.define('channel', {
    name: {
        type: DataTypes.STRING,
    },
},
    {
        timestamps: false,
    }
)

export default Channel;