//migration de properties_photos creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
    up: async(queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction()
        try {
            await queryInterface.createTable('properties_photos', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                url: {
                    allowNull: false,
                    type: Sequelize.STRING,
                },
                property_id: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'properties',
                        key: 'id',
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                created_at: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updated_at: {
                    allowNull: false,
                    type: Sequelize.DATE,
                }
            }, { transaction })
            await transaction.commit()
        } catch (error) {
            await transaction.rollback()
            throw error
        }
    },
    down: async(queryInterface, /*Sequelize*/ ) => {
        const transaction = await queryInterface.sequelize.transaction()
        try {
            await queryInterface.dropTable('properties_photos', { transaction })
            await transaction.commit()
        } catch (error) {
            await transaction.rollback()
            throw error
        }
    }
}