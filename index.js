/** @format */

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const server = require('http').Server(app)

const io = require('socket.io')(server)

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})

server.listen(3000, () => {
  console.log('Server is running on port 3000')
})
