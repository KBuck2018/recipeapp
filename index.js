//This is the requirements section, be sure to load all of these NPM's can just use npm i if there are already dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const methodOverride = require("method-override");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

var Recipe = require("./models/Recipe");
var recipe = require("./controllers/recipe");
var userController = require("./controllers/user");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  session({
    secret: "IHopeThisWorks",
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash());

require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  console.log("current user: ", req.user);
  res.locals.currentUser = req.user;
  next();
});

app.get("/", (req, res) => {
  Recipe.find({}).then(recipes => {
    res.render("index", { recipes });
  });
});

app.use("/recipes", recipe);
app.use("/user", userController);

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
