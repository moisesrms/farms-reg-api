'use strict'

module.exports = (sequelize, DataTypes) => {
  var GeoPoints = sequelize.define('GeoPoints', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    latitude: {
      type: DataTypes.FLOAT
    },
    longitude: {
      type: DataTypes.FLOAT
    },
    altitude: {
      type: DataTypes.FLOAT
    },
    time: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  })
  GeoPoints.associate = function (models) {}
  return GeoPoints
}
