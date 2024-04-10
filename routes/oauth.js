const router = require("express").Router();
const passport = require("passport").Strategy;

router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] }),
  function (req, res) {
    res.json(req.user);
  }
);

router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  function (req, res) {
    if (!req.user) {
      console.log("Authentication failed");
      return res.redirect("/");
    }

    console.log("User authenticated:", req.user);
    res.redirect("http://localhost:3000");
  }
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = router;
