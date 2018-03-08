var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var passport = require("passport");
var User = require("../models/User");
// var Recipe = require("../models/Recipe");

router.get("/signup", (req, res) => {
  res.render("user/signup", { message: req.flash("usernameFlag") });
});

router.post("/signup", (req, res) => {
  var signup = passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/user/signup",
    failureFlash: true
  });
  return signup(req, res);
});

router.get("/login", (req, res) => {
  res.render("user/login", { message: req.flash("loginError") });
});

router.post("/login", (req, res) => {
  var login = passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/user/login",
    failureFlash: true
  });

  return login(req, res);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
