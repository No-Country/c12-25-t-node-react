'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PropertiesPhotos extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            PropertiesPhotos.belongsTo(models.Properties, {
                foreignKey: 'id',
                onDelete: 'CASCADE'
            })
        }
    }
    PropertiesPhotos.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        url: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        property_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
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
        modelName: 'PropertiesPhotos',
        tableName: "properties_photos",
        underscored: true,
        timestamps: true,
    });
    return PropertiesPhotos;
};