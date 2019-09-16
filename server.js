'use strict'
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')
const fs = require('fs')
const https = require('https')
require('dotenv').config()

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

const app = express()
apollo.applyMiddleware({ app })

var server = https.createServer(
  {
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('./ssl/server.cert')
  },
  app
)

apollo.installSubscriptionHandlers(server)

server.listen({ port: process.env.PORT }, () =>
  console.log(
    'Server ready at',
    `https://${process.env.HOSTNAME}${apollo.graphqlPath}`
  )
)
