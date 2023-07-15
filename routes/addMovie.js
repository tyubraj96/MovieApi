const mongoose = require("mongoose");

// For adding movie data .
const addmovie = async (req, res) => {
  //destructing
  const { movie_name, info, rating, description } = req.body;
  const movieModel = mongoose.model("movies");

  //Data Validation
  try {
    if (!movie_name) throw "Movie Name must be provided";
    if (!info) throw "Info must be provided";
    if (!rating || rating < 1 || rating > 10)
      throw "Rating  must be provided between 1-10";
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }

  try {
    await movieModel.create({
      movie_name: movie_name,
      info: info,
      rating: rating,
      description: description,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: "Movie Creation failed , Something went wrong",
    });
    return;
  }

  //Success
  res.status(200).json({
    status: "success",
    message: "Movie added Sucessfully",
  });
};

module.exports = addmovie;
