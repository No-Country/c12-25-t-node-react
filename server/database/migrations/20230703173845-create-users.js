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
                    unique: true,
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
                    validate: {
                        min: 8,
                    },
                    type: Sequelize.STRING
                },
                phone: {
                    allowNull: true,
                    validate: {
                        min: 9,
                    },
                    type: Sequelize.STRING,
                },
                avatar: {
                    allowNull: true,
                    type: Sequelize.TEXT,
                },
                is_active: {
                    allowNull: false,
                    type: Sequelize.STRING,
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