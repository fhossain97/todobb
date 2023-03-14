const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const mongodb = mongoose.connection;

mongodb.on('connected', () => {
    console.log(`Connected at ${mongodb.host}:${mongodb.port}`)
})