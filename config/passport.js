var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/User");

module.exports = function(passport) {
  passport.serializeUser(function(user, callback) {
    callback(null, user.id);
  });
  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
      callback(err, user);
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        userNameField: "userName",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, userName, password, callback) {
        User.findOne({ "local.userName": userName })
          .then(user => {
            if (user) {
              return callback(
                null,
                false,
                req.flash("userNameTaken", "this username is already taken")
              );
            } else {
              var newUser = new User();
              newUser.local.userName = userName;
              newUser.local.password = newUser.encrypt(password);

              newUser.save(err => {
                if (err) throw err;
                return callback(null, newUser);
              });
            }
          })
          .catch(err => console.log(err));
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        userNameField: "userName",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, userName, password, callback) {
        User.findOne({ "local.userName": userName }, function(err, user) {
          if (err) return callback(err);
          if (!user) {
            return callback(
              null,
              false,
              req.flash("invalidLogin", "User not found")
            );
          }
          if (!user.validPassword(password)) {
            return callback(
              null,
              false,
              req.flash("invalidLogin", "Invalid Password")
            );
          }
          return callback(null, user);
        });
      }
    )
  );
};
