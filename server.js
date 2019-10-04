// Kunde inte flytta de här in i en annnan fil
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

var modul = require('./routes/post.js')

var post = require('./routes/post.js');
var dele = require('./routes/delete.js');
var get = require('./routes/get.js');
var put = require('./routes/put.js');
var comments = require('./routes/comment.js')
var expres = require('./routes/expres.js')


let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.listen(3000)
console.log("\n WORK")
