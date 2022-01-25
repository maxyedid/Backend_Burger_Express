const Sequelize = require('sequelize')
const db = require('./database')

// customer model

// Has an id, firstName, lastName, email, phone #, and pastOrders

const Customer = db.define('customer', {
    cid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phoneNumber: {
        type: Sequelize.STRING(14),
        allowNull: false
    }
})

module.exports = Customer;