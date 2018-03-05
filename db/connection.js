var mongoose = require("mongoose");
// connects the database
mongoose.connect("mongodb://localhost/Enter Database Name");
// uses mongoose Promise functions
mongoose.Promise = Promise;
// exports
module.exports = mongoose;
