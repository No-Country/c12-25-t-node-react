'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class properties_rooms extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            properties_rooms.belongsTo(models.Properties, {
                foreignKey: 'id',
                onDelete: 'CASCADE'
            })
        }
    }
    properties_rooms.init({
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
        cocina: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        comedor: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        living: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        baños: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        dormitorios: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        toilet: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        garage: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        terraza: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        pileta: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        jardin: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        sum: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
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
        modelName: 'properties_rooms',
        tableName: "properties_rooms",
        underscored: true,
        timestamps: true,
    });
    return properties_rooms;
};