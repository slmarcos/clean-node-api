import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
import setupStaticFile from './static-files'
import setupSwagger from './config-swagger'

const app = express()
setupStaticFile(app)
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
export default app
