import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

let Template = sequelize.define('Template', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    tableName: 'Template',
    timestamps: false
});

export default Template;