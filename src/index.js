var Koa = require('koa')
var app = new Koa()
const Router = require('koa-router')
const fs = require('fs')
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)

// Router
let router = new Router()
router.get('/', (ctx) => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./index.html')
})
app.use(router.routes())

// socket.io-api
io.on('connection', (socket) => {
  socket.emit('chat message', 'hi, client, welcome connection')
  socket.on('chat message', (msg) => {
    socket.emit('chat message', msg)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

// server-listen-port
server.listen(3000, () => {
  console.log('listening on *:3000')
})
