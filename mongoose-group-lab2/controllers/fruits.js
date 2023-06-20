const Fruit = require('../models/fruit');

module.exports = {
  index,
  new: newFruit,
  create, 
  show
};

async function index(req, res) {
  const fruits = await Fruit.find({});
  res.render('fruits/index', { fruits });
}

function newFruit(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('fruits/new', { errorMsg: '' });
}

async function create(req, res) {
  try {
    await Fruit.create(req.body);
    res.redirect('/fruits');  // Update this line
  } catch (err) {
    console.log(err);
    res.render('fruits/new', { errorMsg: err.message });
  }
}

async function show(req, res) {
    try {
      const fruit = await Fruit.findById(req.params.id);
      res.render('fruits/show', { fruit });
    } catch (err) {
      console.log(err);
      res.redirect('/fruits');
    }
  }