const Task = require("../models/task")

//indexRoute - shows all the tasks

const indexRoute = async (req, res) => {
    let allTasks = await Task.find({}).populate('owner')
    console.log(allTasks, 'List of tasks')
    res.json(allTasks)
}

const createRoute = async (req, res) => {
    let newTask = await new Task(req.body)
    newTask.save((err) => {
        if(err) {
            console.log(err, 'Error in saving new task')
        } else {
            console.log(newTask, 'Task was saved')
        }
    }
    )
    Task.findById(newTask._id).populate('owner')
    console.log(newTask._id, 'Task ID')

}

const updateRoute = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body).res.populate('owner')
    res.redirect('/tasks')
}

const deleteRoute = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.redirect('/tasks')
}


module.exports = {
    indexRoute,
    createRoute,
    updateRoute,
    deleteRoute
}