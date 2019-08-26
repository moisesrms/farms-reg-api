'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GeoPoints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      altitude: {
        type: Sequelize.FLOAT
      },
      time: {
        type: Sequelize.STRING
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GeoPoints')
  }
}
