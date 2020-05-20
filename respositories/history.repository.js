const { History } = require('../models')

module.exports = {
  async create (data) {
    return await History.create(data)
  }
}
