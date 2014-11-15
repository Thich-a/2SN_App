App.controller('accountCtrl', function ($scope, $http, $window, $location){

  $http.get( basePath + 'api/user/me', {})
  .success(function(data){
    console.log(data);
    $scope.user = data.user;
  })
  .error(function(data){
    alert("Credentials invalid");
  })
});
