const express = require('express')
require('dotenv').config()

const app = express()

//DataBase Connection Test
const {connectDb} = require('./config/db')
//connectDb()



app.listen(3000, () => {
    console.log('Server Is Running')
})