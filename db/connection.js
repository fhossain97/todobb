const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .catch((err) => console.log(`Error! See details: ${err}`));

const mongodb = mongoose.connection;

mongodb.on("connected", () => {
  console.log(`Connected on Port: ${mongodb.port}`);
});
