const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
/** Importing all the routes */
const route = require("./routes");
const app = express();

/** For parsing headers data of application/json type */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Connecting to Database */
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err.message));

app.use("/", route);
app.listen(process.env.PORT, function () {
  console.log("Express app running on port " + process.env.PORT);
});
