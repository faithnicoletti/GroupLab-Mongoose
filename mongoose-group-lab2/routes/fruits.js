var express = require('express');
var router = express.Router();

const fruitsController = require('../controllers/fruits');

router.get('/', fruitsController.index);
router.get('/new', fruitsController.new);
router.get('/:id', fruitsController.show);
//router.get('/:id/edit', fruitsControllers/:id/edit);
router.post('/', fruitsController.create);
//router.put('/:id', fruitsControllers/:id);
//router.delete('/:id', fruitsControllers/:id);


module.exports = router;
