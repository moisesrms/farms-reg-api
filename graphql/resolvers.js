'use strict'

const {
  GeoPoints,
  Plants,
  Beds,
  BedsGeopoints
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
    },

    async allBeds () {
      const beds = await Beds.findAll()
      return beds
    },

    async allBedsGeopoints () {
      const bedsGeopoints = await BedsGeopoints.findAll()
      return bedsGeopoints
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
  },

  Plants: {
    async geoPoint (plants) {
      const geoPoint = await plants.getGeoPoint()
      return geoPoint
    }
  },

  BedsGeopoints: {
    async geoPoint (bedsGeopoints) {
      const geoPoint = await bedsGeopoints.getGeoPoint()
      return geoPoint
    },

    async bed (bedsGeopoints) {
      const bed = await bedsGeopoints.getBed()
      return bed
    }
  }
}

module.exports = resolvers
