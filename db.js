const mongoose = require("mongoose");
require("dotenv").config(); // For configuring the sensitive information in database.

// Should have made like function but this also works.
const ConnectToDb = async () => {
  // Since callback is deprecated from mongoose.connect should need to use this method.
  try {
    await mongoose.connect(process.env.mongo_connection);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
    
  }

};

// Exporting the module
module.exports = ConnectToDb;
