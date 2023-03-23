const router = require("express").Router();
const taskCtrl = require("../controllers/taskController");

router.get('/', taskCtrl.indexRoute)
router.post('/', taskCtrl.createRoute);
router.put('/:id', taskCtrl.updateRoute)
router.delete('/', taskCtrl.deleteRoute)

module.exports = router;
