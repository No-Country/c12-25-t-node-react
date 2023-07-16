'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // RAD define association here
        }
    }
    Users.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.UUID,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                min: 8,
            }
        },
        phone: {
            validate: {
                min: 9,
            },
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.TEXT,
        },
        is_active: {
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
        },
    }, {
        sequelize,
        modelName: 'Users',
        tableName: 'users',
        underscored: true,
        timestamps: true,
        scopes: {
            view_public: { attributes: ['id'] },
            view_same_user: { attributes: ['id', 'email'] },
            auth_flow: { attributes: ['id', 'email'] },
            view_me: { attributes: ['id', 'email'] },
        },
        hooks: {
            beforeCreate: (user, options) => {
                if (user.email) {
                    let emailLowercase = String(user.email).toLowerCase();
                    user.email = emailLowercase;
                }
                if (user.username) {
                    let usernameLowercase = String(user.username).toLowerCase();
                    user.username = usernameLowercase;
                }
            },
        },
    });
    return Users;
};