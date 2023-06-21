const Fruit = require('../models/fruit');

module.exports = {
  index,
  new: newFruit,
  create, 
  show, 
  edit, 
  update: updateFruit,
  delete: deleteFruit
};

async function index(req, res) {
    try {
    const fruits = await Fruit.find({});
    res.render('fruits/index', { fruits });
    } catch (err) {
        console.log(err);
        res.render('fruits/index', {errorMsg: err.message});
    }
}

function newFruit(req, res) {
  res.render('fruits/new', { errorMsg: '' });
}

async function create(req, res) {
  try {
    await Fruit.create(req.body);
    res.redirect('/fruits');
  } catch (err) {
    console.log(err);
    res.render('fruits/new', { errorMsg: err.message });
  }
}

async function show(req, res){
    try {
      const fruit = await Fruit.findById(req.params.id);
      res.render('fruits/show', { fruit });
    } catch (err) {
      console.log(err);
      res.redirect('/fruits');
    }
  }

async function edit(req, res) {
      try {
        const fruit = await Fruit.findById(req.params.id);
        res.render('fruits/edit', { fruit });
      } catch (err) {
        res.redirect('/fruits/');
      }
    }
    
async function updateFruit(req, res) {
        try {
            await Fruit.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/fruits/' + req.params.id)
        }  catch (err) {
          res.render(`/fruits/${req.params.id}/edit`, { errorMsg: err.message });
        }
      }

async function deleteFruit(req, res) {
        try {
          await Fruit.findByIdAndRemove(req.params.id);
          res.redirect('/fruits');
        }  catch (err) {
          res.render('/fruits', { errorMsg: err.message });
        }
      }

    