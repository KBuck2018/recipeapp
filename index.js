//This is the requirements section, be sure to load all of these NPM's can just use npm i if there are already dependencies
var express = require("express");

var app = express();
const morgan = require("morgan");
var bodyParser = require("body-parser");
var hbs = require("hbs");
var methodOverride = require("method-override");
var passport = require("passport");
var session = require("express-session");

var flash = require("connect-flash");
var Recipe = require("./models/Recipe");
var recipe = require("./controllers/recipe");
var userController = require("./controllers/user");

app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser());
app.use(
  session({
    secret: "IHopeThisWorks",
    saveUninitialized: true,
    resave: false
  })
);
app.use(flash());
app.use(methodOverride("_method"));
app.use("/recipes", recipe);
app.use("/user", userController);
app.use(morgan("dev"));
app.use(passport.session());
app.use((req, res, next) => {
  // res.currentUser = req.user;
  res.locals.currentUser = req.user;
  next();
});

require("./config/passport")(passport);

app.get("/", (req, res) => {
  Recipe.find({}).then(recipes => {
    res.render("index", { recipes });
  });
});

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
