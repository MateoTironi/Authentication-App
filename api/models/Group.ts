import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Group = db.define('group', {
    name: {
        type: DataTypes.STRING,
    },
},
    {
        timestamps: false,
    }
)

export default Group;