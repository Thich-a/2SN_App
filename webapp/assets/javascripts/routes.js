App.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'webapp/views/index.html',
      controller:  'indexCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'webapp/views/dashboard.html',
      controller:  'dashboardCtrl'
    })
    .when('/messages', {
      templateUrl: 'webapp/views/messages/show.html',
      controller:  'messagesCtrl'
    .when('/games', {
      templateUrl: 'webapp/views/game_sessions/index.html',
      controller:  'gameSessionsCtrl'
    });
});
