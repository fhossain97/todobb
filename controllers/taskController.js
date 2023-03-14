const Task = require("../models/task");

//indexRoute - shows all the tasks
const indexRoute = (req, res) => {
  Task.find({}, (err, tasks) => {
    if (err) {
      return res.status(400).json(err);
    }
    res.json(tasks);
    console.log(tasks)
  })
  .populate("owner");
};

//createRoute - creates a new task
const createRoute = (req, res) => {
  let newTask = new Task(req.body);
  newTask.save(() => console.log(newTask, "New Task"));
  Task.findById(newTask._id).populate("owner");
  res.json(newTask);
  console.log(newTask)
};

//updateRoute - edit the task
const updateRoute = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body).populate("owner");
  res.redirect("/");
};

//deleteRoute - remove the task
const deleteRoute = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/");
};

module.exports = {
  indexRoute,
  createRoute,
  updateRoute,
  deleteRoute,
};
