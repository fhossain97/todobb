//require installs
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = 8000;
const session = require("express-session");
const methodOverride = require("method-override");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
require("./db/connection");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "whatevs",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", taskRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server connected on port: ${PORT}`);
});
