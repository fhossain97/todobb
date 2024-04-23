const User = require("../models/user");

const getUser = async (req, res) => {
  const user = await fetch("http://localhost:3000/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  let newUser = new User({ ...req.body });
  newUser.save(() => console.log(newUser, "New User"));
  User.findOne(newTask.githubId).then(() => res.json(newUser));
};

module.exports = {
  getUser,
};
