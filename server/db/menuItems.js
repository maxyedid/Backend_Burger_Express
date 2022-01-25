const Sequelize = require('sequelize')
const db = require('./database')

//menu items model

// has a foodId, short description, category, name, price, and imageURL

const Food = db.define('menuItem', {
    foodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
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

module.exports = Food;