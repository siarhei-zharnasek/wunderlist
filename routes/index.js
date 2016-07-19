module.exports = function(app) {
  var express = require('express');
  var router = express.Router();
  var ToDos = require('../app/models/todo');
  var todosRouter = require('./todo');
  var passport = require('passport');

  app.use('/todo', todosRouter);

  app.get('/login', function(req, res) {
    res.render('./views/login.html');
  });

  app.post('/login', passport.authenticate('local'), function(req, res) {
    res.send(req.user);
  });

  app.get('/loggedin', function(req, res) {
    res.send(req.isAuthenticated() ? req.user : false);
  });

  /*app.get('/profile', isLoggedIn, function(req, res) {
    res.render('index.html');
  });*/

  app.post('/logout', function(req, res) {
    req.logout();
    req.send(200);
  });
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.send(401);
  }
}
