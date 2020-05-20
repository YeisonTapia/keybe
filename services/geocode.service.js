const axios = require('axios')

module.exports = {
  async index (city) {
    const token = process.env.MAPBOX_TOKEN
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${token}`
    const result = await axios.get(url)
    return result.data
  }
}
