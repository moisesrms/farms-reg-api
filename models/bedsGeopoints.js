'use strict'
module.exports = (sequelize, DataTypes) => {
  const BedsGeopoints = sequelize.define('BedsGeopoints', {
    BedId: DataTypes.INTEGER,
    GeoPointId: DataTypes.INTEGER
  }, {})
  BedsGeopoints.associate = function (models) {
    BedsGeopoints.belongsTo(models.Beds)
    BedsGeopoints.belongsTo(models.GeoPoints)
  }
  return BedsGeopoints
}
