'use strict'
module.exports = (sequelize, DataTypes) => {
  const geoPoints = sequelize.define('GeoPoints', {
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    altitude: DataTypes.FLOAT,
    time: DataTypes.STRING
  }, {})
  geoPoints.associate = function (models) {
    geoPoints.belongsTo(models.Plants)
  }
  return geoPoints
}
