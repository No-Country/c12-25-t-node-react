'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class bookmarks extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            //models.Properties.belongsToMany(models.Users, { through: bookmarks });
            //models.Users.belongsToMany(models.Properties, { through: bookmarks });
            bookmarks.belongsTo(models.Properties, {
                foreignKey: 'property_id'
            });
            bookmarks.belongsTo(models.Users, {
                foreignKey: 'user_id'
            });
        }
    }
    bookmarks.init({
        property_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'bookmarks',
        tableName: 'bookmarks',
        underscored: true,
        timestamps: true,
    });

    return bookmarks;
};