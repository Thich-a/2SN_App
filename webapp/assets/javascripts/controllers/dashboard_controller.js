App.controller('dashboardCtrl', function ($scope, $http, $window, $location, AuthService){

  $http.get( basePath + 'api/user/me', {})
  .success(function(data){
    $scope.user = data.user;
    // $scope.sheets = $scope.user.sheets;
    // $scope.sessions = $scope.user.games;
    $scope.albums = $scope.user.albums;
    $scope.posts = $scope.user.posts;
    $scope.friendGroups = $scope.user.friend_groups;

    $scope.friends = [];
    $scope.pending = [];
    var i = 0;
    var j = 0;
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
        else
        {
          $scope.pending[j] = friends[friend];
          j++;
        }
      }
    }

    i = 0;
    j = 0;
    $scope.pendingSent = [];
    $scope.pendingRecieved = [];
    for (var friend in $scope.pending)
    {
      if ($scope.pending[friend].sender == $scope.user.name)
      {
        $scope.pendingSent[i] = $scope.pending[friend];
        i++;
      }
      else
      {
        $scope.pendingRecieved[j] = $scope.pending[friend];
        j++;
      }
    }

  })
  .error(function(data){
    alert("Credentials invalid");
    $location.path('/');
  })

  $scope.acceptFriend = function(friendId) {
    $http.post( basePath + 'api/validfriends/'+friendId, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.refuseFriend = function(friendId) {
    $http.delete( basePath + '/api/friends/'+friendId, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.createPost = function() {
    $http.post( basePath + 'api/blogs', {"content":$scope.dashboardNewPost})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    });
  }

});
