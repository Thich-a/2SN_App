App.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/index.html',
      controller:  'indexCtrl'
    });
  $routeProvider
    .when('/dashboard', {
      templateUrl: 'app/views/dashboard.html',
      controller:  'dashboardCtrl'
    });
});
