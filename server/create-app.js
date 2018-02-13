const express = require('express')
const path = require('path')

function createApp() {

  const app = express()

  app
    .use(express.static(path.join(__dirname, 'public')))

  return app

}

module.exports = { createApp }
