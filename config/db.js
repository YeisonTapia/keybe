'use strict'
require('dotenv').config({ path: './.env' })

module.exports = {
  username: process.env.DB_USERNAME,
  password: '12345',
  database: 'database_development',
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false
}
