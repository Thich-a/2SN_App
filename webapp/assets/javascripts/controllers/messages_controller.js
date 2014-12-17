App.controller('messagesCtrl', function ($scope, $http, $window, $route, $location){

  $http.get( basePath + 'api/me', {})
  .success(function(data){
    $scope.user = data.user;
    $scope.NewChannelFriends = [];

    // getting friendlists
    $http.get( basePath + 'api/friendlists/' + $scope.user.id, {})
    .success(function(data){
      $scope.friendGroups = data.friendLists;
    })

    // getting friendlists
    $http.get( basePath + 'api/friends/' + $scope.user.id, {})
    .success(function(data){
      $scope.friends = data.friends;
    })

    $http.get( basePath + 'api/channels/'+$scope.user.id, {})
    .success(function(data){
      $scope.channels = data.channels;
    })
    .error(function(data){
      console.log('error with delete channels');
    })
  })
  .error(function(data){
    alert("Credentials invalid");
  })

  $scope.checkIfGame = function(channelId) {
    for (var channel in $scope.channels)
      if ($scope.channels[channel].id == channelId)
        if (typeof $scope.channels[channel].game_session == 'undefined')
          return 0;
    return 1;
  }

  $scope.switchGroups = function(groupId) {
    for(var group in $scope.friendGroups)
      if ($scope.friendGroups[group].id == groupId)
        $scope.activeGroup = $scope.friendGroups[group];
    $scope.friends = $scope.activeGroup.friends;
  }

  $scope.createNewFriendGroup = function() {
    $http.post( basePath + 'api/friendlists/' + $scope.user.id, {"name":$scope.NewFriendGroupName})
    .success(function(data){
      window.location.reload()
    })
  }

  $scope.deleteGroup = function(groupId) {
    $http.delete( basePath + 'api/users/' + $scope.user.id + '/friendlists/'+groupId, {})
    .success(function(data){
      window.location.reload()
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }



  // get all channels
  // api/channels/{userId}



  $scope.toggleInArray = function(userName, userId, $event) {
    var flag = 0;
    for (var friend in $scope.NewChannelFriends)
      if ($scope.NewChannelFriends[friend].id == userId)
      {
        delete $scope.NewChannelFriends[friend];
        flag = 1;
      }
    if (flag == 0)
      $scope.NewChannelFriends.push({"username":userName, "id":userId});
    if (typeof $event != 'undefined')
      $($event.target).hide();
  }

  $scope.createNewChannel = function() {
    if ($scope.NewChannelFriends != '')
    {
      $http.post( basePath + 'api/channels/'+$scope.NewChannelFriends[0].id, {})
      .success(function(data){
        var channelId = data.data.id;
        for (var i = 1; i < $scope.NewChannelFriends.length; i++)
        {
          $http.post( basePath + 'api/participants/' + channelId + '/friends/'+$scope.NewChannelFriends[i].id, {})
          .success(function(answer){
          })
        }
        window.location.reload()
      })
    }
  }

  $scope.switchConversation = function(channelId) {
    for(var channel in $scope.channels)
      if ($scope.channels[channel].id == channelId)
        $scope.activeChannel = $scope.channels[channel];

    $http.get( basePath + 'api/messages/'+channelId, {})
    .success(function(data){
      $scope.messages = data.messages;
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.sendMessage = function() {
    $http.post( basePath + 'api/messages/'+$scope.activeChannel.id, {"contents":$scope.channelNewMessage})
    .success(function(data){
      $http.get( basePath + 'api/messages/'+ data.data.id, {})
      .success(function(answer){
        $scope.messages = answer.messages;
        $scope.channelNewMessage = '';
      })
    })
  }

  $scope.deleteChannel = function(channelId) {
    $http.delete( basePath + 'api/channels/'+channelId, {})
    .success(function(data){
      window.location.reload()
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
        for (var user in $scope.currentChannel.users)
          $scope.EditChannelFriends.push($scope.currentChannel.users[user]);
      }
  }

  $scope.checkInList = function(userId) {
    for (var user in $scope.currentChannel.users)
      if ($scope.currentChannel.users[user].id == userId)
        return 1;
    return 0;
  }

  $scope.AddToCurrentChannel = function(friendId) {
    for (var friend in $scope.friends)
      if ($scope.friends[friend].id == friendId)
        var addedFriend = $scope.friends[friend].user;

    $http.post( basePath + 'api/participants/' + $scope.currentChannel.id + '/friends/' + addedFriend.id, {})
    .success(function(data){
      window.location.reload()
      $('.modal-backdrop.fade.in').hide();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.deleteFromCurrentChannel = function(participantId) {
    $http.delete( basePath + 'api/fromchannels/' + $scope.currentChannel.id + '/participants/' + participantId, {})
    .success(function(data){
      window.location.reload()
      $('.modal-backdrop.fade.in').hide();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.friendChangeGroup = function(friendgroupId) {
    $http.post( basePath + 'api/friends/' + $scope.transfertFriendId + '/moves/' + friendgroupId, {})
    .success(function(data){
      window.location.reload()
      $('.modal-backdrop.fade.in').hide();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

});
