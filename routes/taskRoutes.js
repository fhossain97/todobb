const express = require("express");
const router = express.Router();
const taskCtrl = require("../controllers/taskController");

router.get('/', taskCtrl.indexRoute)
router.post('/', taskCtrl.createRoute);
router.put('/:id', taskCtrl.updateRoute)
router.delete('/:id', taskCtrl.deleteRoute)

module.exports = router;
