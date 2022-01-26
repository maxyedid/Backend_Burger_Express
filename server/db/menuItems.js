const Sequelize = require('sequelize')
const db = require('./database')

//menu items model

// has a foodId, short description, category, name, price, and imageURL

//todo foreign keys


const Item = db.define('menuItem', {
    name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    type: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    imageURL: {
        type: Sequelize.TEXT,
        allowNull: true,
        validate: {
            isURL: true
        }
    }
})


module.exports = Item;