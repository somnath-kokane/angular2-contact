
var express = require('express');
var router = express.Router();
var auth = require('./auth');
var contact = require('./contact');

router.use(function(req, res, next){
  next();
})

router.post('/login', auth.login);
router.use('/contact', contact.router);

router.use(function(req, res, next){
  var data = res.locals.data;
  var msg = res.locals.message || 'OK';
  var json = {
    status: {
      code: 200,
      success: true,
      message: msg || 'OK'
    },
    data: data
  }
  res.json(json);
})

router.use(function(err, req, res, next){
  var statusCode = 500;
  if(err instanceof auth.Http401Error){
    statusCode = 401;
  }
  var json = {
    status: {
      code: statusCode,
      success: false,
      message: err.message
    }
  }

  res.status(statusCode).json(json);
})

module.exports = router;