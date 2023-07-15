const mongoose = require("mongoose");
const updateMovies = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_id, movie_name, rating, info, description } = req.body;

  try {
    if (!movie_id) throw "Movie_id is not defined";
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
    return;
  }
  try {
    await moviesModel.updateOne(
      { _id: movie_id },
      {
        movie_name: movie_name,
        rating: rating,
        info: info,
        description: description,
      },
      { runValidators: true }
    );
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
    return;
  }
  res.status(200).json({
    status: "Success",
    message: "Movie Succesfully Updated",
  });
};

module.exports = updateMovies;
