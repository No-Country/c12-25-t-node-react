'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class properties_services extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            properties_services.belongsTo(models.Properties, {
                foreignKey: 'id',
                onDelete: 'CASCADE'
            })
        }
    }
    properties_services.init({
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        property_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        electricidad: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        telefono: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        gas: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        internet: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        alarma: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        ascensor: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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
        modelName: 'properties_services',
        tableName: "properties_services",
        underscored: true,
        timestamps: true,
    });
    return properties_services;
};