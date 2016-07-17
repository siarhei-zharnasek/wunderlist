angular.module('wunderlist', [])
  .factory('Todos', function($http) {
    return {
      get: function() {
        return $http.get('/todo');
      },
      create: function(todoData) {
        return $http.post('/todo', todoData);
      }
    }
  });
