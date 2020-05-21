const express = require('express')
const { GeocoderController, WeatherController } = require('./controllers')
const asyncify = require('express-asyncify')
const api = asyncify(express.Router())
const cors = require('cors')

api.use(cors())
api.get('/geocoder/:city', GeocoderController.index)
api.get('/weather/:lat/:lgn', WeatherController.index)

module.exports = api
