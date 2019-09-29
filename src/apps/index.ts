import express from 'express'
import apiV1Module from './api/v1'
module.exports = async ({}) => {
  const server = express()
  const apiV1 = await apiV1Module({})
  server.use('/api/v1', apiV1)
  return server
}
