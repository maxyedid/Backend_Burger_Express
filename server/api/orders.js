const router = require('express').Router()
const Order = require('../db/orders')
const MenuItems = require('../db/menuItems')

router.get("/allOrders", async (req, res) => {
    try {
        const orders = await Order.findAll({include: MenuItems})
        res.status(200).send(orders)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.post("/newOrder", async (req, res) => {
    try {
        const newOrder = await Order.create(req.body)
        res.status(202).send(newOrder)
    } catch (error) {
        res.status(404).send("Order cannot be created")
    }
})

router.get("/pastOrders/:id", async (req, res) => {
    try {
        const pastOrders = await Order.findAll({where: {customerId : req.params.id}, include: MenuItems});
        res.status(200).send(pastOrders)
    } catch (error) {
        res.status(404).send("No orders can be found for this customer")
    }
})




module.exports = router;