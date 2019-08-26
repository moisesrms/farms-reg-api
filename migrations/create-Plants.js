'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      geoPoint: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Plants')
  }
}
