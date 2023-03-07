const passport = require("passport");
const User = require("../models/user");
const GitHubStrategy = require("passport-github2");

//using GH to let user login
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOrCreate({ githubId: profile.id }, function (err, user) {
        if (err) return done(err);
        if (user) {
          return done(null, user);
        } else {
          let newUser = new User({
            name: profile.displayname,
            email: profile.emails[0].value,
            githubId: profile.id,
          });
          newUser.save(function (err) {
            if (err) return done(err);
            return done(null, newUser);
          });
        }
      });
    }
  )
);


//set up session for when user is logged in
passport.serializeUser((user, done) => done(null, user.id));

//request from existing user comes in
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
