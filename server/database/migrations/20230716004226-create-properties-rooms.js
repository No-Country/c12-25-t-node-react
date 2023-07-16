/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('properties_rooms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            property_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'properties',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            cocina: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            comedor: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            living: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            baños: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            dormitorios: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            toilet: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            garage: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            terraza: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            pileta: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            jardin: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            sum: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('properties_rooms');
    }
};