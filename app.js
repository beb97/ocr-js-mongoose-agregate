const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");
const app = express();

require('dotenv').config();
app.use(express.json());

let mongoUrl = process.env.DB_URL; // TODO

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

app.use("/api/user/", userRoutes);
app.use("/api/sauces/", sauceRoutes);

module.exports = app;
