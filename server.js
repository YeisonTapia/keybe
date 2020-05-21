'use strict'

const express = require('express')
const app = express()
const api = require('./api')
require('dotenv').config()
const port = process.env.PORT

app.use('/api', api)

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
