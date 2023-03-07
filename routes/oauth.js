const router = require("express").Router();
const passport = require("passport").Strategy;

//to authenticate user
router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["profile", "email"] })
);

//callback and redirects
router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/tasks");
  }
);

//logout and post err if unsucessful
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

//for protected routes to ensure that user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = router;
