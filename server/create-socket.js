function createSocket(server) {

  const io = require('socket.io').listen(server)

  io
    .on('connection', (socket) => (
      socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
      })
    ))
}

module.exports = { createSocket }
