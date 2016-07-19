var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todos = new Schema({
  text: String,
  done: Boolean
});

var UserSchema = new Schema({
  username: String,
  password: String,
  todos: [Todos]
});

module.exports = mongoose.model('User', UserSchema);
