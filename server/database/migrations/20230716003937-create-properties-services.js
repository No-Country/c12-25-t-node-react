/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('properties_services', {
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
            electricidad: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            telefono: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            gas: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            internet: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            alarma: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            ascensor: {
                allowNull: false,
                type: Sequelize.BOOLEAN
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
        await queryInterface.dropTable('properties_services');
    }
};