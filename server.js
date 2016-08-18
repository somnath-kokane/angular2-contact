'use strict';
var path = require('path');
var express = require('express');
var app = express();

app.use(function (req, res, next) {
  next();
});

app.use(express.static('dist'))
app.use(express.static('public'))
app.use(express.static('node_modules'))

app.use('*', function(req, res){
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

