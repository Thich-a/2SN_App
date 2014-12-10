App.controller('logoutCtrl', function ($scope, $http, $window, $location, AuthService){
  AuthService.deleteToken();

  $http.get( basePath + 'api/user/me', {})
  .success(function(data){
    $scope.user = data.user;
  })
  .error(function(data){
  })
});
