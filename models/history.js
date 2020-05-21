'use strict'

const Sequelize = require('sequelize')
const config = require('../config/db.js')

const sequelize = new Sequelize(config)

const fields = {
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ip: {
    type: Sequelize.STRING,
    allowNull: false
  },
  response: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}

const history = sequelize.define('History', fields)

module.exports = history