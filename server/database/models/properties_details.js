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
				onDelete: 'CASCADE',
			});
		}
	}
	PropertiesDetails.init(
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			total_area: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			covered_area: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			bedrooms: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			bathrooms: {
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
			balcony: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			elevator: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			antiquity: {
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
			},
		},
		{
			sequelize,
			modelName: 'PropertiesDetails',
			tableName: 'properties_details',
			underscored: true,
			timestamps: true,
		}
	);
	return PropertiesDetails;
};
