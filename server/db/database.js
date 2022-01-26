const Sequelize = require('sequelize')

const pkg = ('../../package.json')

const db = new Sequelize(
    process.env.DATABASE_URL || `postgres://gmymrrwilymzyz:7a5607bc7b23c0829d98ebf9a9eb17d638ab042fb0aa477d1dc5c0dd0d6b33bf@ec2-18-214-214-252.compute-1.amazonaws.com:5432/da7jbq99si57so`, {
    dialect: 'postgres',
    logging: false
})

module.exports = db;