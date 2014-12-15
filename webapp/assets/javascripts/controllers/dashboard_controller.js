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
      if ($scope.pending[friend].sender == $scope.user.username)
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

    $scope.photos = [];
    for (var album in $scope.user.albums)
    {
      $http.get( basePath + 'api/albums/'+ $scope.user.albums[album].id, {})
      .success(function(answer){
        for(var photo in answer.album.photos)
          $scope.photos.push(answer.album.photos[photo]);
      })
      .error(function(answer){ console.log('error !'); })
    }

  })
  .error(function(data){
    alert("Credentials invalid");
    $location.path('/');
  })

  $scope.clickNextInput = function(event) {
    var Uploader = $('#' + event.target.getAttribute('id')).next();
    Uploader.click();
  }

  $scope.createCharacter = function() {
    var xmlhttp = new XMLHttpRequest();
    var formdata = new FormData(document.getElementById('dashboardNewCharacter'));
    xmlhttp.open("POST", basePath + 'api/character', false);
    xmlhttp.setRequestHeader("Authorization", AuthService.getToken());
    xmlhttp.onload = function() { console.log('Upload successfull !!!');}
    xmlhttp.send(formdata);
    if (xmlhttp.status == 200)
    {
      console.log(xmlhttp);
    }
  }

  $scope.acceptFriend = function(friendId) {
    $http.post( basePath + 'api/users/' + $scope.user.id + '/validfriends/'+friendId, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.refuseFriend = function(friendId) {
    $http.delete( basePath + 'api/users/' + $scope.user.id + '/friends/'+friendId, {})
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
