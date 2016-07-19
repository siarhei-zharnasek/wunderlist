var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/user');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(null, user);
    })
  });

  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({
        username: username,
        password: password
      }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'Incorrect pass' });
        }

        return done(null, user);
      });
    }
  ));
}
