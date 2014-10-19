App.controller('loginCtrl', function ($scope, $http, $window, $location, AuthService){

  $scope.username = null;
  $scope.password = null;

  $scope.getUser = function(user){
    username = $scope.username;
    password = $scope.password;

    $http.post('http://192.168.201.4/web/app_dev.php/api/login_check', {username: username, password: password})
      .success(function(data){
        AuthService.setToken(data.token);
        $location.path('/dashboard');
      })
      .error(function(data){
        alert("Credentials invalid");
      })
  };

});
