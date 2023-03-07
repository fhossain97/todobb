//require installs
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT = 8000;
const methodOverride = require('method-override')
const taskRoutes = require("./routes/taskRoutes");
// const userRoutes = require("./routes/userRoutes");

require("dotenv").config();
require("./db/connection");
require("./db/passport");

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


// app.router.use(session({
//   secret: 'Task',
//   resave: false,
//   saveUninitialized: true
// }))
// app.use(passport.initialize());
// app.use(passport.session());

app.use("/tasks", taskRoutes);
// app.use('/user', userRoutes)

//home route for testing
app.get("/", (req, res) => {
  res.send("Home page");
});

//app is listening on this port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
