const Sequelize = require('sequelize')
const Config = require('dotenv').config()
const pkg = ('../../package.json')

const db = new Sequelize(
    process.env.DATABASE_URL || `postgres://postgres:sql@localhost:5432/backend_burger_express`, {
    dialect: 'postgres',
    logging: false,
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = db;