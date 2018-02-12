const { createApp } = require('./create-app')
const { createSocket } = require('./create-socket')

const app = createApp()
const server = app.listen(3000, () => {
  console.log('Listening on :3000')
})

createSocket(server)
