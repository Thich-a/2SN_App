App.controller('dashboardCtrl', function ($scope, $http, $window, $location, AuthService){

  $http.get( basePath + 'api/user/me', {})
  .success(function(data){
    $scope.user = data.user;
    // $scope.sheets = $scope.user.sheets;
    // $scope.sessions = $scope.user.games;
    $scope.albums = $scope.user.albums;
    $scope.posts = $scope.user.posts;
    console.log($scope.posts);

  })
  .error(function(data){
    alert("Credentials invalid");
  })
});
