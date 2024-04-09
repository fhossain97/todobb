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
      done(null, profile.id);
      // User.findOrCreate({ githubId: profile.id }, function (err, user) {
      //   if (err) return done(err);
      //   if (user) {
      //     return done(null, profile.id);
      //   }
      // else {
      //   let newUser = new User({
      //     name: profile.displayname,
      //     email: profile.emails[0].value,
      //     githubId: profile.id,
      //   });
      //   newUser.save(function (err) {
      //     if (err) return done(err);
      //     return done(null, newUser);
      //   });
      // }
      // });
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
