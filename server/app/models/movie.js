const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  rating: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
  },
  trailer: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
