'use strict'
module.exports = (sequelize, DataTypes) => {
  const Plants = sequelize.define('Plants', {
    geoPoint: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {})
  Plants.associate = function (models) {
    Plants.belongsTo(models.GeoPoints)
  }
  return Plants
}
