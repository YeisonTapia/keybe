'use strict'

const express = require('express')
const GeocoderController = require('./controllers/geocoder.controller')
const WeatherController = require('./controllers/weather.controller')
const asyncify = require('express-asyncify')
const api = asyncify(express.Router())
const cors = require('cors')

api.use(cors())
api.get('/geocoder/:city', GeocoderController.index)
api.get('/weather/:lat/:lgn', WeatherController.index)

module.exports = api
