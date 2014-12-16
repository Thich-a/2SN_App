App.controller('usersCtrl', function ($scope, $http, $window, $route, $location){
  $http.get( basePath + 'api/users', {})
  .success(function(data){
    $scope.users = data.users;

    $http.get( basePath + 'api/me', {})
    .success(function(data){
      $scope.me = data.user;

      // getting friendlists
      $http.get( basePath + 'api/friends/' + $scope.me.id, {})
      .success(function(data){
        $scope.friends = data.friends;
      })
    })

  })
  .error(function(data){
    alert("Credentials invalid");
  })

  $scope.AddFriend = function(userid)
  {
    $http.post( basePath + 'api/users/'+ $scope.me.id + '/friends/' + userid, {})
    .success(function(data){
      window.location.reload()
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.checkIfFriend = function(username) {
    for (var friend in $scope.friends)
    {
      if ($scope.friends[friend].user.username == username)
        return 0;
    }
    return 1;
  }

  $scope.DeleteUser = function(userId) {
    $http.delete( basePath + 'api/users/' + userId, {})
    .success(function(data){
      window.location.reload()
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }
});
