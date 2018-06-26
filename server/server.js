const express = require('express')
const path = require('path')
const routes = require('./routes/routes.js')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/routes', routes)

module.exports = server
