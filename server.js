// Kunde inte flytta de här in i en annnan fil
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

var index = require('./routes/index.js')


let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.listen(3000)
console.log("\n WORK")
