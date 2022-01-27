const db = require('./database')
const MenuItems = require('./menuItems')
const Customer = require('./customers')
const Orders = require('./orders')

//needs to have associations
Orders.belongsTo(Customer, {as: 'customerId'})
Orders.belongsToMany(MenuItems, {through: 'order_items'})
MenuItems.belongsToMany(Orders, {through: 'order_items'})
Customer.hasMany(Orders)



module.exports = {
    db,
    MenuItems,
    Customer,
    Orders
}