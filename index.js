//require installs
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = 8000;
const session = require("express-session");
const methodOverride = require("method-override");
const taskRoutes = require("./routes/taskRoutes");
const oauthRoutes = require("./routes/oauth");
const passport = require("passport");

require("./db/connection");
require("dotenv").config();
require("./db/passport");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "whatevs",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/", oauthRoutes);
// app.use("/", taskRoutes);

app.listen(PORT);
