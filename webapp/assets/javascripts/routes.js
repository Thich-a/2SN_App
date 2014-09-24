App.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'webapp/views/index.html',
      controller:  'indexCtrl'
    });
  $routeProvider
    .when('/dashboard', {
      templateUrl: 'webapp/views/dashboard.html',
      controller:  'dashboardCtrl'
    });
});
