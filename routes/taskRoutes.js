const router = require("express").Router();
const taskCtrl = require("../controllers/taskController");

router.get('/', taskCtrl.indexRoute)
router.post('/new', taskCtrl.createRoute);
router.put('/:id', taskCtrl.updateRoute)
router.delete('/:id', taskCtrl.deleteRoute)

module.exports = router;
