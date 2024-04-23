const mongoose = require("mongoose");
const User = require("./user");

const taskSchema = new mongoose.Schema({
  date: String,
  title: String,
  description: String,
  owner: User,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
