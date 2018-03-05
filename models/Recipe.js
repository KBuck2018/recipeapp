const mongoose = require("../db/connection");
const recipeSchema = new mongoose.Schema({
  title: {
    //uses string class thus capital S.
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  ingredients: [String]
});
//constructs the model
const Recipe = mongoose.model("recipe", recipeSchema);
//exports the model
module.exports = Recipe;
