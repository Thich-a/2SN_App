App.controller('usersCtrl', function ($scope, $http, $window, $location){
  $http.get( basePath + 'api/users', {})
  .success(function(data){
    $scope.users = data.users;

    $http.get( basePath + 'api/user/me', {})
    .success(function(data){
      $scope.me = data.user;
      $scope.friendGroups = data.user.friend_groups;
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
    console.log(userid);
    $http.post( basePath + 'api/friends/'+userid, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.checkIfFriend = function(username) {
    if ($scope.friendGroups == false)
      return 0;
    for (var friendGroup in $scope.friendGroups)
    {
      var friends = $scope.friendGroups[friendGroup].friends;
      for (var friend in friends)
      {

        // console.log(friends[friend].name + ' - ' + username);

        if (friends[friend].name == username)
          return 0;
      }
    }
    return 1;
  }

  $scope.DeleteUser = function(userId) {
    $http.delete( basePath + 'api/users/' + userId, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }
});
