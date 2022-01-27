const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {db} = require('./db')
const FoodItem = require('./db/menuItems')
const Customer = require('./db/customers')
const Orders = require('./db/orders')


async function seed() {
        await db.sync( {force: true}) 
        await FoodItem.create({name: "Cheese Burger", description: "Burger with cheese", type: "entree", price: 12.50, imageURL: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Cheeseburger.jpg?$Product_Desktop$"})
        await FoodItem.create({name: "Hot Dog", type: "entree", price: 5.00, imageURL: "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2014/06/thumb_720_450_dreamstime_xl_34122178-Custom.jpg"})
        await FoodItem.create({name: "French Fries", type: "appetizer", price: 3.50, imageURL: "https://www.seriouseats.com/thmb/Gm6J49wltvTCH2dXt039zkvGZLg=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg"})
        await FoodItem.create({name: "Coca Cola", type: "drink", price: 2.00, imageURL: "https://media.istockphoto.com/photos/classic-cocacola-can-picture-id465133878?k=20&m=465133878&s=612x612&w=0&h=vgcvEz4ts5WZQOhKMaKon8mIQVbr20-JhP7DKgo_wD0="})
        await FoodItem.create({name: "Pudding", description: "Vanilla pudding in a small cup", type: "dessert", price: 4.00, imageURL: "https://www.mybakingaddiction.com/wp-content/uploads/2021/03/vanilla-pudding-with-fruit-720x1080.jpg.webp"})
        await FoodItem.create({name: "Chicken Nuggets", type: "appeitzer", description: "10 Pc.", price: 4.50, imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Chicken_Nuggets.jpg/220px-Chicken_Nuggets.jpg"})
    
        await Customer.create({firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phoneNumber: "555-555-5555", password: "abc123"})
        await Customer.create({firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phoneNumber: "444-444-4444", password: "abc123"})
    
        const fakeOrder = await Orders.create({status: "in cart"})
        await fakeOrder.setCustomer(1)
        await fakeOrder.setMenuItems([1, 2, 3])
        console.log(fakeOrder)
    }

    async function runSeed() {
        console.log('seeding...');
        try {
          await seed();
        } catch (err) {
          console.error(err);
          process.exitCode = 1;
        } finally {
          console.log('closing db connection');
          await db.close();
          console.log('db connection closed');
        }
      }    
      runSeed()
      