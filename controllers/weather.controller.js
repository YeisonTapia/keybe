const { weatherService } = require('../services')

module.exports = {
  async index (req, res, next) {
    try {
      const { lat, lgn } = req.params
      const result = await weatherService.index(lat, lgn)
      res.send(result)
    } catch (e) {
      res.status(500).send('Internal Server Error')
    }
  }
}
