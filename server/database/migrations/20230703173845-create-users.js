//migration de users creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
    up: async(queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction()
        try {
            await queryInterface.createTable('users', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                username: {
                    allowNull: false,
                    type: Sequelize.STRING,
                },
                first_name: {
                    allowNull: false,
                    type: Sequelize.STRING,
                },
                last_name: {
                    allowNull: false,
                    type: Sequelize.STRING,
                },
                email: {
                    allowNull: false,
                    unique: true,
                    type: Sequelize.STRING,
                },
                password: {
                    allowNull: false,
                    type: Sequelize.STRING
                },
                phone: {
                    allowNull: false,
                    type: Sequelize.STRING,
                },
                avatar: {
                    allowNull: false,
                    type: Sequelize.TEXT,
                },
                is_active: {
                    allowNull: false,
                    type: Sequelize.BOOLEAN,
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
            await queryInterface.dropTable('users', { transaction })
            await transaction.commit()
        } catch (error) {
            await transaction.rollback()
            throw error
        }
    }
}