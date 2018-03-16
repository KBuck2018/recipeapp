const express = require("express");
const parser = require("body-parser");
const mongoose = require("./db/Models.js");

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(parser.json());

app.get("/recipes", (req, res) => {
  Recipe.find()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/recipes", (req, res) => {
  Recipe.create(req.body)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/recipes/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(app.get("port"), () => {
  console.log("Server listening on port " + app.get("port"));
});
