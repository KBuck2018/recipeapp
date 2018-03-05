var express = require("express");
var router = express.router();
var passport = require("passport");
var User = require("../models/User");
var Recipe = require("../models/Recipe");

router.get("user/login", (req, res) => {
  res.send("hello");
  //   res.render("/user/login", { message: req.flash("userNameTaken") });
});

router.get("/signup", (req, res) => {
  res.render("/user/signup", { message: req.flash("userNameTaken") });
});

router.post("/", (req, res) => {
  var signup = passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true
  });
  return signup(req, res);
});

router.post("/", (req, res) => {
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
