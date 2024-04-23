const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE_URL, {
    dbName: "task",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(`Error! See details: ${err}`));

const mongodb = mongoose.connection;

mongodb.on("connected", () => {
  console.log(`MongoDB connected on port: ${mongodb.port}`);
});

mongodb.on("disconnected", () => {
  console.log(`MongoDB disconnected on port: ${mongodb.port}`);
});
