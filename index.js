//This is the requirements section, be sure to load all of these NPM's can just use npm i if there are already dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const hbs = require("hbs");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");

//This is a reference to the controller.js in controllers, ensures functionality of the MVC
const controllerController = require("./controllers/");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
//This is the beginning reference to the views/index.hbs, anything put in that file and layout will show up here
app.get("/", (req, res) => {
  res.render("index");
});
app.use(cookieParser());
app.use(bodyParser());

app.use(flash());

app.use(methodOverride("_method"));
app.use("/enter the location youd like this to be from", controllerController);

//sets up the localhost and shows what nodemon should say if its working correctly
app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
