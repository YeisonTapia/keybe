'use strict'

const geocodeService = require('../services/geocode.service')

module.exports = {
  async index (req, res, next) {
    try {
      const { city } = req.params
      const { features } = await geocodeService.index(city)
      res.send(features)
    } catch (e) {
      res.status(500).send('Internal Server Error')
    }
  }
}
