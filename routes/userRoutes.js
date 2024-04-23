const router = require("express").Router();
const userCtrl = require("../controllers/userController");

router.get("/", userCtrl.getUser);

module.exports = router;
