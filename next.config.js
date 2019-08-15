const withSass = require('@zeit/next-sass')
require('dotenv').config()

module.exports = withSass({
  publicRuntimeConfig: { // Will be available on both server and client
    apiUrl: process.env.API_URL
  }
})