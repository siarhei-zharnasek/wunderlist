var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var toDos = new Schema({
  text: String,
  done: Boolean
});

module.exports = toDos;
