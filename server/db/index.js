const db = require('./database')
const Menu = require('./menuItems')
const Customer = require('./customers')
const Orders = require('./orders')

//needs to have associations



module.exports = {
    db,
    Menu,
    Customer,
    Orders
}