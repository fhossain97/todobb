const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  date: String,
  title: String,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
