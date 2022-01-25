const Sequelize = require('sequelize')
const db = require('./database')

//Orders model

//Has an orderId, customer associated to it,
//and many food items that were put into it


const Order = db.define('orders', {
    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    customerId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    foodItemId: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

module.exports = Order