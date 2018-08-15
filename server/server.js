const express = require('express')
const server = express()
const brands = require('./routes/brands')
const path = require('path')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/brands', brands)

module.exports = server
