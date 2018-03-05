//This is the requirements section, be sure to load all of these NPM's can just use npm i if there are already dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const hbs = require("hbs");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");

//This is a reference to the controller.js in controllers, ensures functionality of the MVC
const recipe = require("./controllers/recipe");
var Recipe = require("./models/Recipe");

const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(cookieParser());
app.use(bodyParser());
app.use(
  session({
    secret: "ilovescotchscotchyscotchscotch"
  })
); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(methodOverride("_method"));
app.use("/recipes", recipe);

app.get("/", (req, res) => {
  Recipe.find({}).then(recipes => {
    res.render("index", { recipes });
  });
});

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
