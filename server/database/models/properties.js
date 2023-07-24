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
            Properties.hasMany(models.PropertiesDetails, { as: 'p_details', foreignKey: 'property_id' });
            Properties.hasMany(models.PropertiesPhotos, { foreignKey: 'property_id' });
            Properties.hasMany(models.properties_services, { foreignKey: 'property_id' });
            Properties.hasMany(models.properties_rooms, { foreignKey: 'property_id' });
            Properties.belongsToMany(models.Users, { through: models.bookmarks });
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
        zone: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        address: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        city: {
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
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        is_featured: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        for_sale: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        for_rent: {
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
        modelName: 'Properties',
        tableName: "properties",
        underscored: true,
        timestamps: true,
    });
    return Properties;
};