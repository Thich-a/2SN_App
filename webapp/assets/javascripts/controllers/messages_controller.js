App.controller('messagesCtrl', function ($scope, $http, $window, $route, $location){

  $http.get( basePath + 'api/user/me', {})
  .success(function(data){
    console.log(data);
    $scope.user = data.user;
    $scope.NewChannelFriends = [];

    // getting friendlists
    $http.get( basePath + 'api/friendlists/' + $scope.user.id, {})
    .success(function(data){
      console.log(data);
      $scope.friendGroups = data.friendLists;
    })
    .error(function(data){
      alert("Credentials invalid");
    })

    // getting friendlists
    $http.get( basePath + 'api/friends/' + $scope.user.id, {})
    .success(function(data){
      console.log(data);
      $scope.friends = data.friends;
    })
    .error(function(data){
      alert("Credentials invalid");
    })

    $http.get( basePath + 'api/channels/'+$scope.user.id, {})
    .success(function(data){
      console.log(data);
      $scope.channels = data.channels;
    })
    .error(function(data){
      console.log('error with delete channels');
    })
  })
  .error(function(data){
    alert("Credentials invalid");
  })



  $scope.switchGroups = function(groupId) {
    for(var group in $scope.friendGroups)
      if ($scope.friendGroups[group].id == groupId)
        $scope.activeGroup = $scope.friendGroups[group];
    $scope.friends = $scope.activeGroup.friends;
  }

  $scope.createNewFriendGroup = function() {
    $http.post( basePath + 'api/users/' + $scope.user.id + '/friendlists', {"name":$scope.NewFriendGroupName})
    .success(function(data){
      console.log(data);
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.deleteGroup = function(groupId) {
    $http.delete( basePath + 'api/users/' + $scope.user.id + '/friendlists/'+groupId, {})
    .success(function(data){
      console.log(data);
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }



  // get all channels
  // api/channels/{userId}



  $scope.toggleInArray = function(userName, userId) {
    var flag = 0;
    for (var friend in $scope.NewChannelFriends)
      if ($scope.NewChannelFriends[friend].id == userId)
      {
        delete $scope.NewChannelFriends[friend];
        flag = 1;
      }
    if (flag == 0)
      $scope.NewChannelFriends.push({"username":userName, "id":userId});
  }

  $scope.createNewChannel = function() {
    if ($scope.NewChannelFriends != '')
    {
      $http.post( basePath + 'api/channels/'+$scope.NewChannelFriends[0].id, {})
      .success(function(data){
        console.log(data);
        var channelId = data.data.id;
        for (var i = 1; i < $scope.NewChannelFriends.length; i++)
        {
          $http.post( basePath + 'api/participants/' + channelId + '/friends/'+$scope.NewChannelFriends[i].id, {})
          .success(function(answer){
            console.log(answer);
          })
          .error(function(answer){
            alert("Credentials invalid");
          })
        }
        $route.reload();
      })
      .error(function(data){
        alert("Credentials invalid");
      })
    }
  }


  // remove from channel
  // DELETE /api/fromchannels/{channelId}/participants/{participantId}.



  $scope.switchConversation = function(channelId) {
    for(var channel in $scope.channels)
      if ($scope.channels[channel].id == channelId)
        $scope.activeChannel = $scope.channels[channel];

    $http.get( basePath + 'api/messages/'+channelId, {})
    .success(function(data){
      console.log(data);
      $scope.messages = data.messages;
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.sendMessage = function() {
    $http.post( basePath + 'api/messages/'+$scope.activeChannel.id, {"contents":$scope.channelNewMessage})
    .success(function(data){
      console.log(data);
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.deleteChannel = function(channelId) {
    $http.delete( basePath + 'api/channels/'+channelId, {})
    .success(function(data){
      console.log(data);
      $route.reload();
    })
    .error(function(data){
      console.log('error with delete channels');
    })
  }

  $scope.editChannel = function(channelId) {
    $scope.EditChannelFriends = [];
    for (var channel in $scope.channels)
      if ($scope.channels[channel].id == channelId)
      {
        $scope.currentChannel = $scope.channels[channel];
        for (var user in $scope.channels[channel].users)
          $scope.EditChannelFriends.push($scope.channels[channel].users[user]);
      }
  }

  $scope.AddToCurrentChannel = function(friendId) {
    for (var friend in $scope.friends)
      if ($scope.friends[friend].id == friendId)
        var addedFriend = $scope.friends[friend];

    $scope.EditChannelFriends.push(addedFriend);
  }

  $scope.friendChangeGroup = function(friendgroupId) {
    $http.post( basePath + 'api/friends/' + $scope.transfertFriendId + '/moves/' + friendgroupId, {})
    .success(function(data){
      console.log(data);
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

});
