const express = require ('express')
const connectDB = require('./DB/connection')
const port= process.env.PORT

const app = express()
require('dotenv').config()
app.use(express.json())


connectDB()

app.listen (port, ()=>{

    console.log("running.....")
})