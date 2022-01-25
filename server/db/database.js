const Sequelize = require('sequelize')

const pkg = ('../../package.json')

const db = new Sequelize(`postgres://postgres:sql@localhost:5432/${pkg.name}`, {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = db;