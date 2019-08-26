'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
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

module.exports = makeExecutableSchema({ typeDefs, resolvers })
