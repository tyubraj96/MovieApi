const mongoose = require("mongoose");

// Creates a database schema i.e blueprint of the database.
const moviesSchema = new mongoose.Schema({
  movie_name: {
    type: String,
  },
  info: {
    type: String,
  },
  rating: {
    type: Number,
  },
  description: {
    type: String,
  },
});

// Creates the model with the collection name movies
const moviesModel = mongoose.model("movies", moviesSchema);
module.exports = moviesModel;


