'use strict'
const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type GeoPoints {
    id: ID!
    latitude: Float
    longitude: Float
    altitude: Float
    time: String
  }

  type Plants {
    id: ID!
    GeoPointId: Float
    name: String
    geoPoint: GeoPoints
  }

  type Beds {
    id: ID!
    name: String
    geoPoint: GeoPoints
  }
 
  type BedsGeopoints {
    BedId: Int!
    GeoPointId: Int!
    geoPoint: GeoPoints
    bed: Beds
  }

  type Mutation {
    addGeoPoint (
      latitude: Float,
      longitude: Float,
      altitude: Float,
      time: String
    ): GeoPoints

    addPlants (
      GeoPointId: Float,
      name: String
    ): Plants

    addPlantWithGeoPoint (
      latitude: Float,
      longitude: Float,
      altitude: Float,
      name: String
    ): Plants
  }

  type Query {
    allGeoPoints: [GeoPoints],
    allPlants: [Plants],
    allBeds: [Beds]
    allBedsGeopoints: [BedsGeopoints]
  }
`

module.exports = typeDefs
