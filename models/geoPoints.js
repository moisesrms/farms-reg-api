'use strict'
module.exports = (sequelize, DataTypes) => {
  const GeoPoints = sequelize.define('GeoPoints', {
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    altitude: DataTypes.FLOAT,
    time: DataTypes.STRING
  }, {})
  GeoPoints.associate = function (models) {
    GeoPoints.hasOne(models.Plants)
  }
  return GeoPoints
}
