const db = require('./database')
const MenuItems = require('./menuItems')
const Customer = require('./customers')
const Orders = require('./orders')

//needs to have associations
Orders.belongsTo(Customer, {as: 'customer'})
Orders.belongsToMany(MenuItems, {through: 'orderItems'})
MenuItems.belongsToMany(Orders, {through: 'orderItems'})
Customer.hasMany(Orders)



module.exports = {
    db,
    MenuItems,
    Customer,
    Orders
}