const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(instance => {
    console.log(`Connected on ${instance.connections[0].name}`)
})
.catch(err => console.log(`Error! See details: ${err}`))

const mongodb = mongoose.connection;

mongodb.on('connected', () => {
    console.log(`Connected at Host:${mongodb.host} & Port: ${mongodb.port}`)
})