const router = require('express').Router()
const Customer = require('../db/customers')

const isLoggedIn = async (req, res, next) => {
    try {
      console.log('IN GATEKEEPING');
      const user = await Customer.findOne({
        where: {
          email: req.body.email
        },
      });
      if (user) {
        console.log("Logged in")
        next()
      } else {
        return res.status(404).send('Please log in!');
      }
    } catch (error) {
      console.log(error.message)
      next(error);
    }
  };
  

router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findOne({where: {id: req.params.id}})
        res.status(202).send(customer)
    } catch (error) {
        res.status(404).send("Customer does not exist")
    }
})

router.post('/login', isLoggedIn, async (req, res) => {
        const customer = await Customer.findOne({where: {email: req.body.email}})
        if (!customer) {
            res.status(404).send("Email/Password is incorrect")
        } else if (customer.password != req.body.password) {
            res.status(404).send("Email/Password is incorrect")
        } else {
            res.status(202).send(customer)
        }
})



router.post('/register', async(req, res) => {
    try {
    const newCustomer = await Customer.create(req.body);
    res.status(200).send(newCustomer)
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            res.status(404).send("Email already exists")
        } else {
            res.status(404).send("Fill out all the fields")
        }
    }
})
module.exports = router;