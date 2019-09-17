'use strict'

const {
  GeoPoints,
  Plants
} = require('../models')
require('dotenv').config()

const resolvers = {
  Query: {
    async allGeoPoints () {
      const geoPoints = await GeoPoints.findAll()
      return geoPoints
    },

    async allPlants () {
      const plants = await Plants.findAll()
      return plants
    }
  },

  Mutation: {
    async addGeoPoint (_, {
      latitude,
      longitude,
      altitude,
      time
    }) {
      const geoPoint = await GeoPoints.create({
        latitude,
        longitude,
        altitude,
        time
      })
      return geoPoint
    },

    async addPlants (_, {
      geoPoint,
      name
    }) {
      const plant = await Plants.create({
        geoPoint,
        name
      })
      return plant
    }
  }
}

module.exports = resolvers
