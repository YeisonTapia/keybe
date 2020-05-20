const { geocodeService } = require('../services')

module.exports = {
  async index (req, res, next) {
    try {
      const { city } = req.params
      const result = await geocodeService.index(city)
      res.send(result)
    } catch (e) {
      res.status(500).send('Internal Server Error')
    }
  }
}
