/*
 This example contains really bad cases when using express..
 */
'use strict';
var express = require('express');
var listMiddleware = require('../index.js');
var repl = require('repl');

var app = express();
var repl = require('repl');

var port = process.env.PORT || 1337;

app.listen(port, function () {
  var result;
  console.log('Example app listening on port ' + port);
  console.log('try `app` or `lm(app)`');
  var r = repl.start('>');
  r.context.app = app;
  r.context.lm = listMiddleware;
  console.log(listMiddleware(app));
});

// some normal middleware
app.use(function Lalalu (req, res, next){
  req.middwareTrace = listMiddleware(app);
  next();
});

// using express-list-middleware as a middleware.
app.get('/stacks', function (req, res) {
  res.send(listMiddleware(app)).end();
});

// hello world route
app.get('/hello', require('./hello-world'));

// some normal middleware
app.use(require('./some-middleware'));

// something bad here.
app.use(function BadGuy (){});

// something really bad here
app.use(function (){});

// route never reached unless bad guys are killed.
app.get('/', function (req, res, next){
  res.send('you should never reach me');
});

