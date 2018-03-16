const mongoose = require("./connection.js");

const Recipe = new mongoose.Schema({
  title: {
    type: String
  },
  href: {
    type: String
  },
  ingredients: String,
  thumbnail: String
});
//constructs the model
mongoose.model("Recipe", Recipe);
//exports the model
module.exports = mongoose;
