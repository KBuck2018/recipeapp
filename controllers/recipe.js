const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");
var url = "http://www.recipepuppy.com/?i=&q=";

var recipeSearch = [];

// when clicked to create something new, taked you to page to add new data
router.get("/new", (req, res) => {
  res.render("recipe/new"); //subDocuments should be renamed as an actual directory name relevant to info put in
});

//Shows all of the information for a specific datafile
router.get("/:id", (req, res) => {
  Recipe.findOne({ _id: req.params.id }).then(recipe => res.json(recipe));
});

router.post("/", (req, res) => {
  Recipe.create(req.body).then(recipes => res.json(recipes));
});

// takes the user to the edit page
// router.get("/edit/:id", (req, res) => {
//   Recipe.findOne({ _id: req.params.id }).then(recipe => {
//     res.render("recipe/edit", recipe); //
//   });
// });
//updates the specific information on the specified datafile
router.put("/:id", (req, res) => {
  Recipe.findOneAndUpdate({ _id: req.params.id }, req.body).then(recipe => {
    res.json(recipe);
  });
});

//deletes specific datafile
router.delete("/:id", (req, res) => {
  Recipe.findOneAndRemove({ _id: req.params.id }).then(recipe => {
    res.json(recipe);
  });
});

module.exports = router;
