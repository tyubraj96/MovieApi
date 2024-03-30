//Express import
const express = require("express");
const app = express(); 
// use is middleware
// express.json() parse/serialize raw data into json format
app.use(express.json());

// importing routes
const addmovie = require("./routes/addMovie");
const getallmovies = require("./routes/getAllMovies");
const getsinglemovie = require("./routes/getSingleMovie");
const updatemovie = require("./routes/updateMovie");
const deletemovie = require("./routes/deleteMovie");
const recommender = require("./routes/movieRecommender");

// Connection to database
const ConnectToDb = require("./db");

ConnectToDb();

//Intializing the model
require("./models/movies.model");

// Routes
app.post("/api/movie", addmovie);
app.get("/api/movie", getallmovies);
app.get("/api/movie/:movie_id", getsinglemovie);
app.patch("/api/movie/", updatemovie);
app.delete("/api/movie/:movie_id", deletemovie);
app.get("/api/movie/openai/getrecommendations", recommender);

app.listen(3000, () => {
  console.log("Server started");
});
