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
      GeoPointId,
      name
    }) {
      const plant = await Plants.create({
        GeoPointId,
        name
      })
      return plant
    },

    async addPlantWithGeoPoint (_, {
      latitude,
      longitude,
      altitude,
      name
    }) {
      const now = new Date()
      const time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()

      const geoPoint = await GeoPoints.create({
        latitude,
        longitude,
        altitude,
        time
      })

      if (geoPoint != null) {
        const GeoPointId = geoPoint.id
        const plant = await Plants.create({
          GeoPointId,
          name
        })
        return plant
      }
      return null
    }
  }
}

module.exports = resolvers
