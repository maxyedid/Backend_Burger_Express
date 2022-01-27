const router = require('express').Router()
const Customer = require('../db/customers')

router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.body)
        res.status(202).send(customer)
    } catch (error) {
        res.status(404).send("Customer does not exist")
    }
})

router.post('/login', async (req, res) => {

        const customer = await Customer.findOne({where: {email: req.body.email}})
        if (!customer) {
            res.status(401).send("Email/Password is incorrect")
        } else if (customer.password != req.body.password) {
            res.status(401).send("Email/Password is incorrect")
        }
})

router.post('/register', async(req, res) => {
    try {
    const newCustomer = await Customer.create(req.body);
    res.status(200).send(newCustomer)
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            res.status(401).send("Email already exists")
        } else {
            res.status(404).send("Fill out all the fields")
        }
    }
})
module.exports = router;