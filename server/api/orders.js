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



module.exports = router;