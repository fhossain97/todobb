const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
