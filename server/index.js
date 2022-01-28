const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {db} = require('./db')
const FoodItem = require('./db/menuItems')
const Customer = require('./db/customers')
const Orders = require('./db/orders')

const app = express()
const PORT = 5000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', require('./api/index'))

db.sync().then(async () => {
    console.log('db synced')    
    app.listen(process.env.PORT || PORT, () => {
        console.log("Connection Terminated");
    })
})
