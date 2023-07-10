'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Properties extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // RAD define association here
        }
    }
    Properties.init({
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        address: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        province: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        country: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        price: {
            allowNull: false,
            type: DataTypes.FLOAT
        },
        available: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
        }
    }, {
        sequelize,
        modelName: 'Properties',
        tableName: "properties",
        underscored: true,
        timestamps: true,
    });
    return Properties;
};