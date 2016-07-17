module.exports = function(passport, app) {
  var express = require('express');
  var router = express.Router();
  var ToDos = require('../app/models/todo');
  var todosRouter = require('./todo');

  app.use('/todo', todosRouter);

  /*router.get('/login', function(req, res) {
    res.render('./views/login.html')
  });*/

  /*router.post('/login', function(req, res, next) {
    passport.authenticate('local',
      function(err, user, info) {
        return err
          ? next(err)
          : user
            ? req.logIn(user, function(err) {
                return err
                  ? next(err)
                  : res.redirect('/private');
              })
            : res.redirect('/zip');
      }
    )
  });

  router.get('/profile', isLoggedIn, function(req, res) {
    res.render('index.html');
  });

  router.get('/logout', function(req, res) {
    req.logout();
    req.redirect('/');
  });*/
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}
