App.controller('logoutCtrl', function ($scope, $http, $window, $location, AuthService){
  AuthService.deleteToken();
});
