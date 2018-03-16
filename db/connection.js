var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/recipe", { useMongoClient: true });

module.exports = mongoose;
