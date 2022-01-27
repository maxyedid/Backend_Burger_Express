const Sequelize = require('sequelize')
const db = require('./database')

// customer model

// Has an id, firstName, lastName, email, phone #, and pastOrders

//todo foreign keys

const Customer = db.define('customer', {
    firstName: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.STRING(14),
        allowNull: false
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING(30),
        allowNull: false
    }
})

module.exports = Customer;