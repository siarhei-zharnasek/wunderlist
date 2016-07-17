var express = require('express');
var router = express.Router();
var ToDos = require('../app/models/todo');

function getAllTodos(res) {
  ToDos.find(function(err, todos) {
    if (err) {
      res.send(err);
    } else {
      res.json(todos);
    }
  });
}

/* GET users listing. */
router.route('/')
  .get(function(req, res) {
    getAllTodos(res);
  })

  .post(function(req, res) {
    var todo = new ToDos({
      text: req.body.text,
      done: false
    });

    todo.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        getAllTodos(res);
      }
    });
  });

  router.route('/:id')
    .delete(function(req, res) {
      ToDos.findOneAndRemove({
        _id: req.params.id
      }, function(err) {
        if (err) {
          res.send(err);
        } else {
          getAllTodos(res);
        }
      });
    })

    .put(function(req, res) {
      ToDos.findOne({
          _id: req.params.id
        }, function(err, todo) {
          if (err) {
            res.send(err);
          } else {
            todo.text = req.body.text || todo.text;
            todo.done = req.body.done || todo.done;

            todo.save(function(err) {
              if (err) {
                res.send(err);
              } else {
                getAllTodos(res);
              }
            });
          }
        }
      );
    })

module.exports = router;
