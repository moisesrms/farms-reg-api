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
    geoPoint: Float
    name: String
  }

  type Mutation {
    addGeoPoint (
      latitude: Float,
      longitude: Float,
      altitude: Float,
      time: String
    ): GeoPoints

    addPlants (
      geoPoint: Float,
      name: String
    ): Plants
  }

  type Query {
    allGeoPoints: [GeoPoints],
    allPlants: [Plants]
  }
`

module.exports = typeDefs
