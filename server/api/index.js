const router = require('express').Router()

router.use('/orders', require('./orders'))
router.use('/menu', require('./foodItems'))
router.use('/customer', require('./customers'))

module.exports = router