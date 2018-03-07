//This is the requirements section, be sure to load all of these NPM's can just use npm i if there are already dependencies
var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();
const morgan = require("morgan");
var bodyParser = require("body-parser");
var hbs = require("hbs");
var methodOverride = require("method-override");
var passport = require("passport");
require("./config/passport")(passport);
var session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser());
app.use(cookieParser());

app.use(express.static("public"));

var flash = require("connect-flash");
var Recipe = require("./models/Recipe");
var recipe = require("./controllers/recipe");
var userController = require("./controllers/user");
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "hbs");

app.use(
  session({
    secret: "IHopeThisWorks"
  })
);
app.use(flash());
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(passport.session());

app.get("/", (req, res) => {
  Recipe.find({}).then(recipes => {
    res.render("index", { recipes });
  });
});
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});
app.use("/recipes", recipe);
app.use("/user", userController);

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
