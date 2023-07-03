//migration de properties_details creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('properties_details', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        total_area: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        bedrooms: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        bathrooms: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        garage: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        swimming_pool: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        balcony: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        elevator: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        antiquity: {
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
  down: async (queryInterface, /*Sequelize*/) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('properties_details', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}