const Sequelize = require('sequelize')
const db = require('./database')

//Orders model

//Has an orderId, customer associated to it,
//and many food items that were put into it

//todo foreign keys

const Order = db.define('orders', {
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Order