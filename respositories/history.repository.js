const History = require('../models/history')

module.exports = {
  async create (data) {
    const result = await History.create(data)
    return result.toJSON()
  }
}
