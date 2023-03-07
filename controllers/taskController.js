const Task = require("../models/task")

//indexRoute - shows all the tasks

const indexRoute = async (req, res) => {
    let allTasks = await Task.find({}).populate('owner')
    console.log(allTasks, 'List of tasks')
    res.json(allTasks)

}

//createRoute - creates a new task

const createRoute = async (req, res) => {
    let newTask = await new Task(req.body)
    newTask.save((err) => {
        if(err) {
            console.log(err, 'Error in saving new task')
        } else {
        
            Task.findById(newTask._id).populate('owner')
            res.json(newTask)
            console.log(newTask, 'New Task')
        }
    }
    )


}

//updateRoute - edit the task

const updateRoute = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body).populate('owner')
    res.redirect('/tasks')
}

//deleteRoute - remove the task

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