const mongoose = require("../db/connection");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String
  },
  href: {
    type: String
  },
  ingredients: String
});
//constructs the model
const Recipe = mongoose.model("recipe", recipeSchema);
//exports the model
module.exports = Recipe;
