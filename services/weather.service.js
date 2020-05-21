'use strict'

const axios = require('axios')

module.exports = {
  async index (lat, lgn) {
    const url = `https://api.darksky.net/forecast/88030114c5e47763a011a75e7a10c633/${lat},${lgn}?lang=es`
    const result = await axios.get(url)
    return result.data
  }
}
