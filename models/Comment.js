const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        creator_name: {
            type: DataTypes.TEXT,
            references: {
                model: 'user',
                key: 'username'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        underscored: true,
        modelName: 'comment'
    }
)

module.exports = Comment;