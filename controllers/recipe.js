const express = require("express");
const router = express.Router();

const Recipe = require("../models/Recipe");

router.get("/", (req, res) => {
  //be sure to call in the collection Controller
  Recipe.find({}).then(recipes => {
    //change controllers to whatever you pass as the reference parameter
    res.render("views/index", { recipes }); //always pass in controllers in brackets for this one
  });
});
// when clicked to create something new, taked you to page to add new data
router.get("/new", (req, res) => {
  res.render("recipe/new"); //subDocuments should be renamed as an actual directory name relevant to info put in
});
//When data is input and submitted, creates the data in the database until the data is scrubbed
router.post("/", (req, res) => {
  if (req.body.title) {
    Recipe.create({
      //takes the information from the specified tag and assigns it to the data object
      title: req.body.title,
      url: req.body.url,
      ingredients: req.body.ingredients
    }).then(recipe => {
      res.redirect("/recipes"); //controllers can be changed to whatever you pass as the parameter before {controllers}
    });
  } else {
    //if incorrect, takes the user to the error page
    res.render("recipe/error");
  }
});
// takes the user to the edit page
router.get("/edit/:id", (req, res) => {
  Recipe.findOne({ _id: req.params.id }).then(recipe => {
    res.render("recipe/edit", recipe); //
  });
});
//Shows all of the information for a specific datafile
router.get("/:id", (req, res) => {
  Recipe.findOne({ _id: req.params.id }).then(recipe => {
    res.render("recipe/show", recipe);
  });
});
//updates the specific information on the specified datafile
router.put("/:id", (req, res) => {
  Recipe.findOneAndUpdate({ _id: req.params.id }, req.body).then(recipe => {
    res.redirect("/recipes");
  });
});
//deletes specific datafile
router.delete("/:id", (req, res) => {
  Recipe.findOneAndRemove({ _id: req.params.id }).then(recipe => {
    res.redirect("/recipes");
  });
});

module.exports = router;
