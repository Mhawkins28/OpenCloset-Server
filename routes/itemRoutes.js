const router = require("express").Router();
const itemCtrl = require("../controllers/itemCtrl");


router.get('/items', itemCtrl.itemIndex);
router.post('/items', itemCtrl.postItem);
router.put('/items/:id',itemCtrl.updateItem);
router.delete('/items/:id',itemCtrl.deleteItem);



module.exports = router;