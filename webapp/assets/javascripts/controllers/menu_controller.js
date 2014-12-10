App.controller('menuCtrl', function ($scope, $http, $window, $location){
  $http.get( basePath + 'api/user/me', {})
  .success(function(data){
    $scope.userid = data.user.id;
  })
  .error(function(data){
    alert("Credentials invalid");
  })
});
