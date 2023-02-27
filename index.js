const express = require('express')
const mongoose = require('mongoose')
const app = express ()
const PORT = 8000

require("dotenv").config()
require('./db/connection')


app.get('/', (req, res) => {
    res.send('This home route is working')
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})


