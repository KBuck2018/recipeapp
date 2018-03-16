const mongoose = require("./connection.js");

const recipeSchema = new mongoose.Schema({
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
mongoose.model("recipe", recipeSchema);
//exports the model
module.exports = mongoose;
