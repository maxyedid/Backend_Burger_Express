const router = require('express').Router()
const Order = require('../db/orders')

router.get("/allOrders", async (req, res) => {
    try {
        const orders = await Order.findAll()
        res.status(200).send(orders)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.post("/newOrder", async (req, res) => {
    try {
        const newOrder = await order.create(req.body)
        res.status.send(newOrder)
    } catch (error) {
        res.status(404).send("Order cannot be created")
    }
})

router.get("/pastOrders", async (req, res) => {
    try {
        const pastOrders = await order.findAll({where: {customerId : req.body.customerId}});
        res.status(200).send(pastOrders)
    } catch (error) {
        res.status(404).send("No orders can be found for this customer")
    }
})



module.exports = router;