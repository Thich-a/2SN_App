App.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/index.html',
      controller:  'indexCtrl'
    });
});
