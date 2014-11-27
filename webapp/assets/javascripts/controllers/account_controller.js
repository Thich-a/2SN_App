App.controller('accountCtrl', function ($scope, $http, $window, $location){

  $http.get( basePath + 'api/user/me', {})
  .success(function(data){
    $scope.user = data.user;
  })
  .error(function(data){
    alert("Credentials invalid");
  })

  $scope.DeleteAccount = function() {
    $http.delete( basePath + 'api/users/' + $scope.user.id, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }
});
