const mongoose = require("./Models.js");
const Recipe = mongoose.model("Recipe");
const data = require("./seeds.json");

//This clears the collection and then adds the data to the database
Recipe.remove({})
  .then(() => {
    return Recipe.collection.insert(data);
  })
  .then(() => {
    process.exit();
  });
