const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const port = 5432

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(port, () => {
    console.log("Connection Terminated")
})