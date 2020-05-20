const { weatherService } = require('../services')
const {HistoryRepository} = require('../respositories')
const requestIp = require('request-ip');

module.exports = {
  async index (req, res, next) {
  
    try {
      const { lat, lgn } = req.params
      const result = await weatherService.index(lat, lgn)
      const ip = requestIp.getClientIp(req)
      _saveHistory({lat, lgn,ip, result})
      res.send(result)
    } catch (e) {
      res.status(500).send('Internal Server Error')
    }
  },

  _saveHistory ({lat, lgn, ip, response}){
    const data = {
      city: JSON.stringify({lat, lgn}),
      ip: requestIp.getClientIp(req),
      response: JSON.stringify(result),
    }
    historyRepository.create(data)
  }

}
