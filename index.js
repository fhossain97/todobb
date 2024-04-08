//require installs
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = 8000;
const methodOverride = require("method-override");
const taskRoutes = require("./routes/taskRoutes");
const passport = require("passport");

require("./db/connection");
require("dotenv").config();
require("./db/passport");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(passport.initialize());
app.use(passport.session());

app.use("/", taskRoutes);
// app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
