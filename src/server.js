import http from 'http'
import { Server as SocketIOServer } from 'socket.io'
import createApp from './app.js'
import env from './config/env.js'
import { connectDB } from './database/mongobd.js'
import logger from './config/logger.js'
import initSocket from './socket/socket.js'

const app = createApp()
const httpServer = http.createServer(app)
const io = new SocketIOServer(httpServer,{
  cors:{
    origin: env.CORS_ORIGIN.split(',').map(origin => origin.trim()),
    methods: ['GET', 'POST'],
    credentials: true
  }
})

initSocket(io)


const startServer = async () => {
  try {
    await connectDB()
    httpServer.listen(env.PORT, () => {
      logger.info(`Server is running on port ${env.PORT}`)
    })
  } catch (error) {
    logger.error({ err: error }, 'Failed to start server')
  }
}

startServer()