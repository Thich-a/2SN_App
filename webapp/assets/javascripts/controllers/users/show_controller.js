App.controller('userCtrl', function ($scope, $http, $window, $location, $routeParams){

  $scope.profileId = $routeParams.id;
  $http.get( basePath + 'api/users/'+$scope.profileId, {})
  .success(function(data){
    $scope.user = data.user;
    $scope.posts = $scope.user.posts;
    $scope.friends = [];

    console.log($scope.user);
    var i = 0;
    for (var friendGroup in data.user.friend_groups)
    {
      var friends = data.user.friend_groups[friendGroup].friends;
      for (var friend in friends)
      {
        if (data.user.friend_groups[friendGroup].name != 'wait')
        {
          $scope.friends[i] = friends[friend];
          i++;
        }
      }
    }

    for (var album in data.user.albums)
    {
      if (data.user.albums[album].name == 'Profile')
        var albumId = data.user.albums[album].id;
    }

    $http.get( basePath + 'api/albums/'+albumId, {})
    .success(function(response){
      $scope.photos = response.album.photos;
    })
    .error(function(response){
      alert("Credentials invalid");
    })

    $http.get( basePath + 'api/user/me', {})
    .success(function(answer){
      $scope.me = answer.user;
      $scope.checkIfFriend($scope.me);
    })
    .error(function(answer){
      alert("Credentials invalid");
    })
  })
  .error(function(data){
    alert("Credentials invalid");
  })

  $scope.checkIfFriend = function(user) {
    for (var friendGroup in user.friend_groups)
    {
      var friends = user.friend_groups[friendGroup].friends;
      for (var friend in friends)
      {
        if (friends[friend].id == $scope.user.id)
          $scope.isFriend = 1;
      }
    }
    $scope.isFriend = 0;
  }

  $scope.AddFriend = function(userId) {
    $http.post( basePath + 'api/friends/'+ userId, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.UnFriend = function() {
    // var friendId = 12;
    // $http.delete( basePath + 'api/friend/'+ friendId, {})
    // .success(function(data){
    //   console.log(data);
    // })
    // .error(function(data){
    //   alert("Credentials invalid");
    // })
  }

  $scope.deleteUser = function(userId) {
    $http.delete( basePath + 'api/users/'+ userId, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }
});



