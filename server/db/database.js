const Sequelize = require('sequelize')

const pkg = ('../../package.json')

const db = new Sequelize(
    process.env.DATABASE_URL || `postgres://postgres:sql@localhost:5432/backend_burger_express`, {
    host: "10.0.2.2",
    dialect: 'postgres',
    logging: false
})

module.exports = db;