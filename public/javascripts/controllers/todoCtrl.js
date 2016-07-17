angular.module('wunderlist')
  .controller('todoCtrl', function($scope, $http) {
    $http.get('/todo')
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(err) {
        console.log('Error: ' + err);
      });

    $scope.addTodo = function() {
      $http.post('/todo', {
        text: $scope.newTodo,
        done: false
      })
        .success(function(data) {
          $scope.newTodo = '';
          $scope.todos = data;
        })
        .error(function(err) {
          console.log('Error: ' + err);
        });

      this.newTodo = '';
    }

    $scope.changeTodo = function(todo) {
      todo['done'] = !todo['done'];
      /*$http.put('/todo/' + todo._id, {
        text: todo.text,
        done: todo.done
      })
        .success(function(data) {
          $scope.newTodo = '';
          $scope.todos = data;
        })
        .error(function(err) {
          console.log('Error: ' + err);
        });*/
    }

    $scope.deleteTodo = function(todo) {
      $http.delete('/todo/' + todo._id)
        .success(function(data) {
          $scope.todos = data;
        })
        .error(function(err) {
          console.log(err);
        });
    }

    $scope.showCompleted = function() {
      this.completed = true;
    }

    $scope.showNotCompleted = function() {
      this.completed = false;
    }

    $scope.showAll = function() {
      this.completed = '';
    }
  });
