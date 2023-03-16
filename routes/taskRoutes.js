const router = require("express").Router();
const taskCtrl = require("../controllers/taskController");

router.get('/', taskCtrl.indexRoute)
router.post('/', taskCtrl.createRoute);
router.get('/:id', taskCtrl.showRoute)
router.put('/:id', taskCtrl.updateRoute)
router.delete('/:id', taskCtrl.deleteRoute)

module.exports = router;
