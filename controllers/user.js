var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/User");
var Recipe = require("../models/Recipe");

router.get("/signup", (req, res) => {
  res.render("user/signup", { message: req.flash("userNameTaken") });
});

router.get("/login", (req, res) => {
  res.render("user/login", { message: req.flash("userNameTaken") });
});

router.post("user/signup", (req, res) => {
  var signup = passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true
  });
  return signup(req, res);
});

router.post("user/login", (req, res) => {
  var login = passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  });
  return login(req, res);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
