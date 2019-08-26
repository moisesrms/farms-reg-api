'use strict'

module.exports = (sequelize, DataTypes) => {
  var Plants = sequelize.define('Plants', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    geoPoint: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  })
  Plants.associate = function (models) {}
  return Plants
}
