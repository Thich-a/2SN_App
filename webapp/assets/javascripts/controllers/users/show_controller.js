App.controller('userCtrl', function ($scope, $http, $window, $location, $routeParams){

  $scope.profileId = $routeParams.id;
  $http.get( basePath + 'api/users/'+$scope.profileId, {})
  .success(function(data){
    $scope.user = data.user;
    $scope.posts = $scope.user.posts;
  })
  .error(function(data){
    alert("Credentials invalid");
  })
});



