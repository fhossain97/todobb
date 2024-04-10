const passport = require("passport");

const User = require("../models/user");

const GitHubStrategy = require("passport-github2");

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },

    function (accessToken, refreshToken, profile, done) {
      User.findOne({ githubId: profile.id }, function (err, user) {
        if (err) {
          console.error("Error finding or creating user:", err);
          return done(err);
        }
        if (user) {
          return done(null, profile.id);
        } else {
          let newUser = new User({
            name: profile.displayname,
            username: profile.username,
            githubId: profile.id,
          });
          newUser.save(function (err, savedUser) {
            if (err) {
              console.error("Error saving new user:", err);
              return done(err);
            }
            console.log("New user saved:", savedUser);
            return done(null, savedUser);
          });
        }
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});
