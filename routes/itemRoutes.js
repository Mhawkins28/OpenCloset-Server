const router = require("express").Router();
const itemCtrl = require("../controllers/itemCtrl");

router.get('/', itemCtrl.itemIndex);
router.post('/', itemCtrl.postItem);
router.put('/:id',itemCtrl.updateItem);
router.delete('/:id',itemCtrl.deleteItem);


module.exports = router;