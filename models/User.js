const {Model, DataTypes} = require('sequelize');
const { underscoredIf } = require('sequelize/types/utils');

const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [4,16],
                isNull: false,
                notEmpty: true
            }
                
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8,32],
                isNull: false,
                notEmpty: true
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)