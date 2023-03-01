const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const app = express ()
const PORT = 8000
const taskRoutes = require('./routes/taskRoutes')
const userRoutes = require('./routes/userRoutes')

require("dotenv").config()
require('./db/connection')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/task', taskRoutes)
app.use('/user', userRoutes)


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})


