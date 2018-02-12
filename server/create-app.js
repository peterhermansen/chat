const express = require('express')
const path = require('path')

function createApp() {

  const app = express()
  const http = require('http').Server(app)
  const io = require('socket.io')(http)

  app
    .use(express.static(path.join(__dirname, 'public')))

  io
    .on('connection', (socket) => (
      console.log('A user has connected')
    ))

  http
    .listen(3000, () => {
      console.log('Listening on :3000')
    })

  return app
}

module.exports = { createApp }
