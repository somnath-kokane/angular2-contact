
var defaults = {
  email: 'smnthk@gmail.com',
  password: 'Password1'
}

exports.Http401Error = Http401Error;

exports.login = function(req, res, next){
  var err = null;
  var user = req.body;
  
  if(!isValid(user)){
    next(new Http401Error('invalid credentials'));
    return;
  }

  res.locals.data = {isLogin: true};
  res.locals.message = 'login success';
  next();
}

function isValid(user){
  user = user || {};
  return (user.email === defaults.email
    && user.password === defaults.password)
}

function Http401Error(message){
  Error.apply(this, arguments);
  this.message = message;
}