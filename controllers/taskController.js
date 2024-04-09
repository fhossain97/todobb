const Task = require("../models/task");

const indexRoute = (req, res) => {
  Task.find({}, (err, tasks) => {
    if (err) {
      return res.status(400).json(err);
    }
    res.json(tasks);
  });
};

const createRoute = (req, res) => {
  console.log(req.body, "Req.body");
  let newTask = new Task(req.body);
  newTask.save(() => console.log(newTask, "New Task"));
  Task.findOne(newTask._id).then(() => res.json(newTask));
};

//updateRoute - edit the task
const updateRoute = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

//deleteRoute - remove the task
const deleteRoute = (req, res) => {
  Task.findOneAndDelete(req.params.id, (error, task) => {
    if (error) {
      res.status(400).json(err);
      return;
    }
    res.json(task);
  });
};

module.exports = {
  indexRoute,
  createRoute,
  updateRoute,
  deleteRoute,
};
