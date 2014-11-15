App.controller('loginCtrl', function ($scope, $http, $window, $location, AuthService){

  $scope.username = null;
  $scope.password = null;

  $scope.getUser = function(user){
    username = $scope.username;
    password = $scope.password;

    $http.post(basePath + 'api/login_check', {username: username, password: password})
      .success(function(data){
        AuthService.setToken(data.token);
        $location.path('/dashboard');
      })
      .error(function(data){
        alert("Credentials invalid");
      })
  };

  $scope.createUser = function() {
    $http.post(basePath + 'api/register', {"email":$scope.register_mail, "username":$scope.register_username, "plainPassword":{"first":$scope.register_pwd_first,"second":$scope.register_pwd_second}})
      .success(function(data){
        AuthService.setToken(data.token);
        console.log('createUser token :');
        console.log(data.token);
        // setTimeout(function(){$location.path('/dashboard');}, 3000);

        // $location.path('/dashboard');
      })
      .error(function(data){
        alert("Credentials invalid");
      })
  }

});
