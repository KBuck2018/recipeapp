var Recipe = require("../models/Recipe");
const data = require("./seeds.json");
var User = require("../models/User");
var data2 = require("./user.json");

//This clears the collection and then adds the data to the database
Recipe.remove({})
  .then(() => {
    return Recipe.collection.insert(data);
  })
  .then(() => {
    process.exit();
  });

User.remove({})
  .then(() => {
    return User.collection.insert(data2);
  })
  .then(() => {
    process.exit();
  });
