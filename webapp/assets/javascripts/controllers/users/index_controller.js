App.controller('usersCtrl', function ($scope, $http, $window, $route, $location){
  $http.get( basePath + 'api/users', {})
  .success(function(data){
    $scope.users = data.users;

    $http.get( basePath + 'api/user/me', {})
    .success(function(data){
      $scope.me = data.user;
      $scope.friendGroups = data.user.friend_groups;
      $scope.friends = data.user.friends;
      if ($scope.me.id == 1)
        $scope.friendGroups = false;
      console.log($scope.me);
    })
    .error(function(data){
      alert("Credentials invalid");
    })

  })
  .error(function(data){
    alert("Credentials invalid");
  })

  $scope.AddFriend = function(userid)
  {
    $http.post( basePath + 'api/users/'+ $scope.me.id + '/friends/' + userid, {})
    .success(function(data){
      console.log(data);
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.checkIfFriend = function(username) {
    for (var friend in $scope.friends)
    {
      if ($scope.me.friends[friend].user.username == username)
        return 0;
    }
    return 1;
  }

  $scope.DeleteUser = function(userId) {
    $http.delete( basePath + 'api/users/' + userId, {})
    .success(function(data){
      console.log(data);
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }
});
