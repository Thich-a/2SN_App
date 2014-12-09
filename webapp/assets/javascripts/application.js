var App = angular.module('App', ['ngRoute', 'ngCookies']);

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


App.controller('SuperAuthCookieCtrl', function($cookies, AuthService) {
  var Authorization = $cookies.Auth;
  AuthService.setToken('Bearer ' + Authorization);
});


// CREATING DRAG AND DROP FOR ANGULAR

App.directive('draggable', function() {
  return function(scope, element) {
    // this gives us the native JS object
    var el = element[0];
    el.draggable = true;
    el.addEventListener(
      'dragstart',
      function(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('BigDATA', this.getAttribute('friendid'));
        this.classList.add('drag');
        this.classList.add('transferedBIGDATA');
        return false;
      },
      false
    );
    el.addEventListener(
      'dragend',
      function(e) {
        this.classList.remove('drag');
        this.classList.remove('transferedBIGDATA');
        return false;
      },
      false
    );
  }
});

App.directive('droppable', function() {
  return {
    scope: {
      drop: '&' // parent
    },
    link: function(scope, element) {
      var el = element[0];
      el.addEventListener(
        'dragover',
        function(e) {
          e.dataTransfer.dropEffect = 'move';
          // allows us to drop
          if (e.preventDefault) e.preventDefault();
          this.classList.add('over');
          this.classList.add('BIGDATA');
          return false;
        },
        false
      );
      el.addEventListener(
        'dragenter',
        function(e) {
          this.classList.add('over');
          this.classList.add('BIGDATA');
          return false;
        },
        false
      );
      el.addEventListener(
        'dragleave',
        function(e) {
          this.classList.remove('over');
          this.classList.remove('BIGDATA');
          return false;
        },
        false
      );
      el.addEventListener(
        'drop',
        function(e) {
          if (e.stopPropagation) e.stopPropagation();
          this.classList.remove('over');
          this.classList.remove('BIGDATA');
          scope.$parent.$parent.transfertFriendId = e.dataTransfer.getData('BigDATA');
          scope.$apply('drop()');
          return false;
        },
        false
      );
    }
  }
});
