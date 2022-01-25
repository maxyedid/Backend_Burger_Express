const router = require('express').Router()
const Item = require('../db/menuItems')

router.get('/', async (req, res) => {
    try {
        const items = await Item.findAll()
        res.status(200).send(items)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.post('/', async (req, res) => {
    try {
       const newItem = Item.create(req.body)
        res.status(201).send(newItem)
    } catch (error) {
        res.status(404).send(error.message)
    }
})
module.exports = router