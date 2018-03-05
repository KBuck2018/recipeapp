var express = require("express");
var app = express();
var handlebars = require("hbs");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  Joke.find({}).then(jokes => {
    res.render("index", { jokes });
  });
});

app.listen(4000, () => {
  console.log("It's Alive");
});
