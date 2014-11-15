App.controller('usersCtrl', function ($scope, $http, $window, $location){
  $http.get( basePath + 'api/users', {})
  .success(function(data){
    $scope.users = data.users;
  })
  .error(function(data){
    alert("Credentials invalid");
  })
});
