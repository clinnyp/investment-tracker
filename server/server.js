const path = require('path')
const express = require('express')

const learnerRoutes = require('./routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/learners', learnerRoutes)

module.exports = server
