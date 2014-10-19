var App = angular.module('App', ['ngRoute']);

// App Authentication
App.factory('AuthService', function($http) {
  var logged = false;
  $http.defaults.headers.common.Authorization = ''

  return {
    getToken: function(){
      return $http.defaults.headers.common.Authorization;
    },
    setToken: function(newToken){
      $http.defaults.headers.common.Authorization = newToken;
      logged = true;
    },
    deleteToken: function(){
      $http.defaults.headers.common.Authorization = null;
      logged = false;
    }
  }
});
