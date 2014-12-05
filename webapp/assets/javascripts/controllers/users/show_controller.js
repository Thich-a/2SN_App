App.controller('userCtrl', function ($scope, $http, $window, $location, $routeParams){

  $scope.profileId = $routeParams.id;
  $http.get( basePath + 'api/users/'+$scope.profileId, {})
  .success(function(data){
    $scope.user = data.user;
    $scope.posts = $scope.user.posts;
    $scope.friends = [];

    // getting friends
    var i = 0;
    for (var friendGroup in data.user.friend_groups)
    {
      var friends = data.user.friend_groups[friendGroup].friends;
      for (var friend in friends)
        if (data.user.friend_groups[friendGroup].name != 'wait')
        {
          $scope.friends[i] = friends[friend];
          i++;
        }
    }

    // getting friendlists
    $http.get( basePath + 'api/friendlists/' + $scope.user.id, {})
    .success(function(data){
      console.log('friendlists');
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })



    for (var album in $scope.user.albums)
      if ($scope.user.albums[album].name == 'Profile')
        $scope.albumId = $scope.user.albums[album].id;
    $http.get( basePath + 'api/albums/'+ $scope.albumId, {})
    .success(function(answer){ $scope.photos = answer.album.photos; $scope.currentImage = $scope.photos[0]; })
    .error(function(answer){ console.log('error !'); })


    $http.get( basePath + 'api/user/me', {})
    .success(function(answer){
      $scope.me = answer.user;
      $scope.checkIfFriend($scope.me);
    })
    .error(function(answer){
      alert("Oops ! unable to fetch current logged user");
    })
  })
  .error(function(data){
    alert("Oops ! an error occured !");
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

  $scope.UnFriend = function(userId) {
    $http.delete( basePath + 'api/friend/'+ friendId, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
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

  $scope.changedDisplayed = function(photoUrl) {
    $('#userProfilPicturesCurrentDisplay').attr('src', '/web/uploads/'+photoUrl);
  }

});



