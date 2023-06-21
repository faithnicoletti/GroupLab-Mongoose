var express = require('express');
var router = express.Router();

const fruitsController = require('../controllers/fruits');

router.get('/', fruitsController.index);
router.get('/new', fruitsController.new);
router.post('/', fruitsController.create);

router.get('/:id', fruitsController.show);
router.get('/edit/:id', fruitsController.edit);
router.put('/:id', fruitsController.update);
router.delete('/:id', fruitsController.delete);

module.exports = router;
