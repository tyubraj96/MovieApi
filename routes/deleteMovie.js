const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const getmovie = await moviesModel.findOne({ _id: req.params.movie_id });

  try {
    if (!getmovie) throw "Movie doesn't exist";
    console.log(getmovie);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
    return;
  }

  try {
    await moviesModel.deleteOne({
      _id: req.params.movie_id,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Sucessfully deleted the movie",
  });
};

module.exports = deleteMovie;
