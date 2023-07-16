'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PropertiesType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            PropertiesType.belongsTo(models.Properties, {
                foreignKey: 'id',
                onDelete: 'CASCADE'
            })
        }
    }
    PropertiesType.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        state: {
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
        modelName: 'PropertiesType',
        tableName: "properties_type",
        underscored: true,
        timestamps: true,
    });
    return PropertiesType;
};