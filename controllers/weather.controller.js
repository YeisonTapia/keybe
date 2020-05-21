const { weatherService } = require('../services')
const { HistoryRepository } = require('../respositories')
const requestIp = require('request-ip')

module.exports = {
  async index (req, res, next) {
    try {
      const { lat, lgn } = req.params
      const result = await weatherService.index(lat, lgn)

      /* Save History */
      await HistoryRepository.create({
        city: JSON.stringify({ lat, lgn }),
        ip: requestIp.getClientIp(req),
        response: JSON.stringify(result)
      })

      res.send(result)
    } catch (e) {
      res.status(500).send('Internal Server Error', e)
    }
  }
}
