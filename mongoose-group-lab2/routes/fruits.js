var express = require('express');
var router = express.Router();

const fruitsController = require('../controllers/fruits');

router.get('/', fruitsController.index);
router.get('/new', fruitsController.new);
router.post('/', fruitsController.create);

router.get('/:id', fruitsController.show);
router.put('/:id', fruitsController.update);
router.get('/:id/edit', fruitsController.edit);
//router.delete('/:id', fruitsControllers/:id);

module.exports = router;
