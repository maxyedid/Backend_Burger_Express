const router = require('express').Router()
const Customer = require('../db/customers')

router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id)
        res.status(202).send(customer)
    } catch (error) {
        res.status(404).send("Customer does not exist")
    }
})


module.exports = router;