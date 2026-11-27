import http from 'http'
import createApp from './app.js'
import env from './config/env.js'
import { connectDB } from './database/mongobd.js'
import logger from './config/logger.js'

const app = createApp()
const httpServer = http.createServer(app)

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