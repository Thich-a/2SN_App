App.controller('menuCtrl', function ($scope, $http, $window, $location){
  $http.get( basePath + 'api/me', {})
  .success(function(data){
    $scope.userid = data.user.id;
  })
  .error(function(data){
    alert("Credentials invalid");
  })
});
