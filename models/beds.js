'use strict'
module.exports = (sequelize, DataTypes) => {
  const Beds = sequelize.define('Beds', {
    name: DataTypes.STRING
  }, {})
  Beds.associate = function (models) {
    Beds.hasOne(models.BedsGeopoints)
  }
  return Beds
}
