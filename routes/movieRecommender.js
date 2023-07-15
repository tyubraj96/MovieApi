const { Configuration, OpenAIApi } = require("openai");
const mongoose = require("mongoose");
const recommender = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const moviesData = await moviesModel.find({});
  const moviesString = moviesData.map((mov) => mov.movie_name).join(",");
  const prompt = `Provide movies recommedation based on these movie name ${moviesString} . Provide 10 recommedation. Generate a array name recommendation and place of the objects in the array with movie name , movie info , movie description and movie rating as title`;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, //dotenvkey 
  });
  const openai = new OpenAIApi(configuration);

  try {
    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    res.status(200).json({
      suggestions: chatCompletion.data.choices[0].message.content,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
    return;
  }
};

module.exports = recommender;
