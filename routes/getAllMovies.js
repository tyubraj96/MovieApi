const { default: mongoose } = require("mongoose");

const getAllMovies = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  try {
    const movieData = await moviesModel.find({});

    res.status(200).json({
      status: "Get All Movies",
      message: movieData,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};
module.exports = getAllMovies;
