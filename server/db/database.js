const Sequelize = require('sequelize')

const pkg = ('../../package.json')

const db = new Sequelize(`postgres://postgres:sql@localhost:5432/backend_burger_express`, {
    host: "localhost",
    dialect: 'postgres',
    logging: false
})

module.exports = db;