
exports.login = function(req, res, next){
  res.locals.data = {isLogged: true};
  next();
}