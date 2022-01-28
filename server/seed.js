const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {db} = require('./db')
const FoodItem = require('./db/menuItems')
const Customer = require('./db/customers')
const Orders = require('./db/orders')


async function seed() {
        await db.sync({force: true}) 
        await FoodItem.create({name: "Cheese Burger", description: "Burger with cheese", type: "entree", price: 12.50, imageURL: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Cheeseburger.jpg?$Product_Desktop$"})
        await FoodItem.create({name: "Hot Dog", type: "entree", price: 5.00, imageURL: "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2014/06/thumb_720_450_dreamstime_xl_34122178-Custom.jpg"})
        await FoodItem.create({name: "French Fries", type: "appetizer", price: 3.50, imageURL: "https://www.seriouseats.com/thmb/Gm6J49wltvTCH2dXt039zkvGZLg=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg"})
        await FoodItem.create({name: "Coca Cola", type: "drink", price: 2.00, imageURL: "https://media.istockphoto.com/photos/classic-cocacola-can-picture-id465133878?k=20&m=465133878&s=612x612&w=0&h=vgcvEz4ts5WZQOhKMaKon8mIQVbr20-JhP7DKgo_wD0="})
        await FoodItem.create({name: "Pudding", description: "Vanilla pudding in a small cup", type: "dessert", price: 4.00, imageURL: "https://www.mybakingaddiction.com/wp-content/uploads/2021/03/vanilla-pudding-with-fruit-720x1080.jpg.webp"})
        await FoodItem.create({name: "Chicken Nuggets", type: "appeitzer", description: "10 Pc.", price: 4.50, imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Chicken_Nuggets.jpg/220px-Chicken_Nuggets.jpg"})
        await FoodItem.create({name: "Diet Coke", type: "drink", price: 2.00, imageURL: "https://i5.walmartimages.com/asr/96a7eb7c-ed6e-4fe2-bbda-a6dd8a8662eb.21f29b327f0c10681687206344be4bd3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"})
        await FoodItem.create({name: "Sprite", type: "drink", price: 2.00, imageURL: "https://az651873.vo.msecnd.net/img/prods/large/1010041933.jpg" })
        await FoodItem.create({name: "Dr Pepper", type: "drink", price: 2.00, imageURL: "https://www.myamericanmarket.com/31036/dr-pepper-soda.jpg"})
        await FoodItem.create({name:"Lemon Snapple" , type: "drink", price: 2.50, imageURL: "https://m.media-amazon.com/images/I/61owPAJuWmL._SL1500_.jpg"})
        await FoodItem.create({name: "Onion Rings", type: "appetizer", price: 5.00, imageURL: "https://www.mylatinatable.com/wp-content/uploads/2016/01/foto-heroe-1024x693-1-1024x693.jpg"})
        await FoodItem.create({name: "Water", type: "drink", price: 2.00, imageURL: "https://www.dasani.com/content/dam/nagbrands/us/dasani/en/products/water/Dasani_20oz_wet.png"})
        await FoodItem.create({name: "Ice Cream Sundae", type: "dessert", price: 4.00, imageURL: "https://assets.rbl.ms/21919567/origin.jpg"})
        await FoodItem.create({name: "Chicken Burger", type: "entree", price: 11.00, imageURL: "https://flaevor.com/wp-content/uploads/2020/09/SambalFriedChickenBurgerRecipe.jpg"})
        await FoodItem.create({name: "Grilled Chicken Salad", type: "entree", price: 7.00, imageURL: "https://www.eatwell101.com/wp-content/uploads/2019/04/Blackened-Chicken-and-Avocado-Salad-recipe-1.jpg"})
        await FoodItem.create({name: "Brownie", type: "dessert", price: 1.50, description: "3 Pieces", imageURL: "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-2-1200.jpg"})
        await FoodItem.create({name: "Minute Made Lemonade", type: "drink", price: 2.00, imageURL: "https://www.kroger.com/product/images/large/front/0002500005801"})
        await FoodItem.create({name: "Tuna Wrap", type: "entree", price: 7.00, imageURL: "https://californiaavocado.com/wp-content/uploads/2020/07/California-Tuna-Salad-Wrap.jpeg"})
        await FoodItem.create({name: "Pastrami Burger", type: "entree", description: "Beef Burger with 2 slices of pastrami", price: 15.00, imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93RicHqeYcmUwB_hYjmfY04R4fNhUKO7dvg&usqp=CAU"})
        await FoodItem.create({name: "Sweet Potato Fries", type: "appetizer", price: 3.50, imageURL: "https://www.cookingclassy.com/wp-content/uploads/2021/10/baked-sweet-potato-fries-12.jpg"})


        await Customer.create({firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phoneNumber: "555-555-5555", password: "abc123"})
        await Customer.create({firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phoneNumber: "444-444-4444", password: "abc123"})
    
        const fakeOrder = await Orders.create({status: "Pending"})
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
      
