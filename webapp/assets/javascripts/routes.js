App.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'webapp/views/index.html',
      controller:  'indexCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'webapp/views/dashboard.html',
      controller:  'dashboardCtrl'
    });
});