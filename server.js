const express = require('express')
require('express-async-errors');
require('dotenv').config()

const app = express()

//DataBase Connection Test
//const {connectDb} = require('./config/db')
//connectDb()

app.use(express.json())

//Phoen Routes
app.use('/api/v1/phone', require('./routes/phone'))


//middlware
app.use(require('./middleware/notFound'))
app.use(require('./middleware/errorHandler'))

app.listen(3000, () => {
    console.log('Server Is Running')
})