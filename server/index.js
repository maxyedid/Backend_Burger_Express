const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {db} = require('./db')

const app = express()
const port = 5432

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

db.sync().then(() => {
    console.log('db synced')
    app.listen(port, () => {
        console.log("Connection Terminated, im sorry to interrupt you Elizabeth");
    })
})