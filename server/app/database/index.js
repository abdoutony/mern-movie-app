const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_DEV_URL } = process.env;
const Movie = require("../models/movie");
const moviesSeeds = require("./movies.json");
const usersSeeds = require("./users.json");
const User = require("../models/User");
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_DEV_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    await Movie.insertMany(moviesSeeds);
    await User.insertMany(usersSeeds);
    mongoose.connection.close(function () {
      console.log("** Disconnected from database **");
      process.exit(0);
    });
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.message);
  });
