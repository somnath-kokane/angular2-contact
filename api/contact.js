
var express = require('express');
var router = express.Router();

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', create);


exports.router = router;

var contacts = [
  {id: 1, name: 'Somnath'},
  {id: 2, name: 'Sushma'},
  {id: 3, name: 'Sonali'},
  {id: 4, name: 'Dhruv'},
]

function getAll(req, res, next){
  res.locals.data = contacts;
  next();
}

function getById(req, res, next){
  var id = +req.params.id;
  var contact = contacts.filter(function(c){
    return c.id === id;
  })[0];
  if(!contact){
    next(new Error('contact not found'));
    return;
  }
  res.locals.data = contact;
  next();
}

function create(req, res, next){
  res.locals.data = ({id: (new Date).getTime()})
  next();
}
