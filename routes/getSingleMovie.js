const { default: mongoose } = require("mongoose");

const getsingleMovies = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  try {
    const movieData = await moviesModel.find({
      _id: req.params.movie_id,
    });

    res.status(200).json({
      status: "Get single Movies",
      message: movieData,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
    return;
  }
};
module.exports = getsingleMovies;
