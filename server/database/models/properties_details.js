'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PropertiesDetails extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            PropertiesDetails.belongsTo(models.Properties, {
                foreignKey: 'id',
                onDelete: 'CASCADE'
            })
        }
    }
    PropertiesDetails.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        covered_area: {
            allowNull: false,
            type: DataTypes.FLOAT,
        },
        uncovered_area: {
            allowNull: false,
            type: DataTypes.FLOAT,
        },
        bedrooms: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        bathrooms: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        toilette: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        garage: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        swimming_pool: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        reception_hall: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        balcony: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        elevator: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        gym: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        antiquity: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        property_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        garden: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        terrance: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
        },
        grill: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        credit_worthy: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        professional_use: {
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
        modelName: 'PropertiesDetails',
        tableName: "properties_details",
        underscored: true,
        timestamps: true,
    });
    return PropertiesDetails;
};