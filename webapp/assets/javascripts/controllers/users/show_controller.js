App.controller('userCtrl', function ($scope, $http, $window, $location, $route, $routeParams){

  $scope.profileId = $routeParams.id;
  $http.get( basePath + 'api/users/'+$scope.profileId, {})
  .success(function(data){
    $scope.user = data.user;

    $http.get( basePath + 'api/blogs/' + $scope.user.id, {})
    .success(function(data){
      console.log(data);
      $scope.posts  = data.posts;
    })

    $http.get( basePath + 'api/friends/' + $scope.user.id, {})
    .success(function(data){
      console.log(data);
      $scope.friends = data.friends;
    })

    $http.get( basePath + 'api/albums/' + $scope.user.id, {})
    .success(function(data){
      console.log(data);
      $scope.albums = data.albums;

      $scope.photos = [];
      for (var album in $scope.albums)
        if ($scope.albums[album].name == 'Profile')
          $scope.photos = $scope.albums[album].photos;
    })
    .error(function(data){
      alert("Credentials invalid");
    })

    $http.get( basePath + 'api/user/me', {})
    .success(function(answer){
      $scope.me = answer.user;
      $scope.isFriend = 0;
      $scope.checkIfFriend();
    })
    .error(function(answer){
      alert("Oops ! unable to fetch current logged user");
    })
  })
  .error(function(data){
    alert("Oops ! an error occured !");
  })

  $scope.checkIfFriend = function() {
    for (var friend in $scope.friends)
    {
      if ($scope.friends[friend].user.id == $scope.me.id)
        $scope.isFriend = 1;
    }
  }

  $scope.AddFriend = function() {
    $http.post( basePath + 'api/users/' + $scope.me.id + '/friends/'+$scope.user.id, {})
    .success(function(data){
      console.log(data);
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.UnFriend = function() {
    for (var friend in $scope.friends)
      if ($scope.friends[friend].user.id == $scope.me.id)
        var friendId = $scope.friends[friend].id;

    $http.delete( basePath + 'api/users/' + $scope.user.id + '/friends/' + friendId, {})
    .success(function(data){
      console.log(data);
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.deleteUser = function(userId) {
    $http.delete( basePath + 'api/users/'+ userId, {})
    .success(function(data){
      console.log(data);
      $route.location('#users');
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.changedDisplayed = function(photoUrl) {
    $('#userProfilPicturesCurrentDisplay').attr('src', '/web/uploads/photo/'+photoUrl);
  }

});



