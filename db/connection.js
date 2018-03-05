var mongoose = require("mongoose");
// connects the database

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect("mongodb://localhost/recipe");
}
// uses mongoose Promise functions
mongoose.Promise = Promise;
// exports
module.exports = mongoose;
