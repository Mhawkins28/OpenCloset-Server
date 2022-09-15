const router = require("express").Router();
const lookCtrl = require("../controllers/lookCtrl");


router.get('/', lookCtrl.lookIndex);
router.get('/:id', lookCtrl.getOneLook)
router.post('/', lookCtrl.postLook);
router.put('/:id', lookCtrl.updateLook);
router.delete('/:id', lookCtrl.deleteLook);

module.exports = router;

