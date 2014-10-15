App.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'webapp/views/index.html',
      controller:  'indexCtrl'
    })
    .when('/login', {
      templateUrl: 'webapp/views/login.html',
      controller:  'loginCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'webapp/views/dashboard.html',
      controller:  'dashboardCtrl'
    })
    .when('/messages', {
      templateUrl: 'webapp/views/messages/index.html',
      controller:  'messagesCtrl'
    })
    .when('/games', {
      templateUrl: 'webapp/views/game_sessions/index.html',
      controller:  'gameSessionsCtrl'
    })
    .when('/account', {
      templateUrl: 'webapp/views/account/index.html',
      controller:  'accountCtrl'
    })
    .when('/galleries', {
      templateUrl: 'webapp/views/galleries/index.html',
      controller:  'galleriesCtrl'
    });

});
