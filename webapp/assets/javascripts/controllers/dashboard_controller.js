App.controller('dashboardCtrl', function ($scope, $http, $window, $location, $route, AuthService){

  $http.get( basePath + 'api/me', {})
  .success(function(data){
    $scope.user = data.user;

    // getting user posts
    $http.get( basePath + 'api/blogs/' + $scope.user.id, {})
    .success(function(data){
      $scope.posts  = data.posts;
    })

    // getting user sheets
    $http.get( basePath + 'api/sheets/' + $scope.user.id, {})
    .success(function(data){
      $scope.sheets = data.character_sheets;
    })

    // getting game sessions
    $http.get( basePath + 'api/games/' + $scope.user.id, {})
    .success(function(data){
      $scope.games = [];
      for (var game in data.listGameSessionMaster)
        $scope.games.push(data.listGameSessionMaster[game]);
      for (var game in data.listGameSessionPlayer)
        $scope.games.push(data.listGameSessionPlayer[game]);
    })

    // getting user albums
    $http.get( basePath + 'api/albums/' + $scope.user.id, {})
    .success(function(data){
      $scope.albums = data.albums;

      $scope.photos = [];
      for (var album in $scope.albums)
        for (var photo in $scope.albums[album].photos)
          $scope.photos.push($scope.albums[album].photos[photo]);
    })

    // getting friendlists
    $http.get( basePath + 'api/friendlists/' + $scope.user.id, {})
    .success(function(data){
      $scope.friendGroups = data.friendLists;


      $scope.friends = [];
      $scope.pending = [];
      var i = 0;
      var j = 0;
      for (var friendGroup in $scope.friendGroups)
      {
        var friends = $scope.friendGroups[friendGroup].friends;
        for (var friend in friends)
        {
          if ($scope.friendGroups[friendGroup].name != 'wait')
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
    })

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
    xmlhttp.open("POST", basePath + 'api/sheets', false);
    xmlhttp.setRequestHeader("Authorization", AuthService.getToken());
    xmlhttp.onload = function() { console.log('Upload successfull !!!');}
    xmlhttp.send(formdata);
    if (xmlhttp.status == 200)
    {
      window.location.reload()
      $('.modal-backdrop.fade.in').hide();
    }
  }

  $scope.deleteCharacterSheet = function(sheetId) {
    $http.delete( basePath + 'api/sheets/' + sheetId, {})
    .success(function(data){
      window.location.reload()
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.acceptFriend = function(friendId) {
    $http.post( basePath + 'api/users/' + $scope.user.id + '/validfriends/'+friendId, {})
    .success(function(data){
      window.location.reload()
      $('.modal-backdrop.fade.in').hide();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.refuseFriend = function(friendId) {
    $http.delete( basePath + 'api/users/' + $scope.user.id + '/friends/'+friendId, {})
    .success(function(data){
      window.location.reload()
      $('.modal-backdrop.fade.in').hide();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.createPost = function() {
    $http.post( basePath + 'api/blogs', {"content":$scope.dashboardNewPost})
    .success(function(data){
      window.location.reload()
      $('.modal-backdrop.fade.in').hide();
    })
    .error(function(data){
      alert("Credentials invalid");
    });
  }

});
