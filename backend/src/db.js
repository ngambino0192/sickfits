// this file connects to the remote prisma DB and gives us the ability to query it with js
const { Prisma } = require('prisma-binding');

// these are the connection strings
const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;