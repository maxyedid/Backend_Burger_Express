const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {db} = require('./db')
const FoodItem = require('./db/menuItems')

const app = express()
const PORT = 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', require('./api/index'))

db.sync({force: true}).then(() => {
    console.log('db synced')

    FoodItem.create({name: "Cheese Burger", description: "Burger with cheese", type: "entree", price: 12.50, imageURL: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Cheeseburger.jpg?$Product_Desktop$"})
    FoodItem.create({name: "Hot Dog", type: "entree", price: 5.00, imageURL: "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2014/06/thumb_720_450_dreamstime_xl_34122178-Custom.jpg"})
    FoodItem.create({name: "French Fries", type: "appetizer", price: 3.50})
    FoodItem.create({name: "Coca Cola", type: "drink", price: 2.00})
    FoodItem.create({name: "Pudding", description: "Vanilla pudding a small cup", type: "dessert", price: 4.00})

    app.listen(PORT, () => {
        console.log("Connection Terminated, im sorry to interrupt you Elizabeth");
    })
})