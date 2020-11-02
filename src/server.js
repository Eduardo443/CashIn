const pug = require('pug')
const express = require('express')
const pages = require('./pages.js')
const server = express()

const path = require('path')

server
.use(express.urlencoded({extended: true }))
.use(express.static('public'))

.set('views', path.join(__dirname + '/views'))
.set('view engine', 'hbs')

.get('/', pages.index)
.get('/calculator', pages.calculator)

server.listen(8080)
