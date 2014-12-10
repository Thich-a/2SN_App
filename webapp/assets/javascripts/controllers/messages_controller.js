App.controller('messagesCtrl', function ($scope, $http, $window, $location){

  $http.get( basePath + 'api/user/me', {})
  .success(function(data){
    console.log(data);
    $scope.user = data.user;
    $scope.friendGroups = $scope.user.friend_groups;
  })
  .error(function(data){
    alert("Credentials invalid");
  })

  $scope.switchConversation = function(userId) {
    for(var friend in $scope.friends)
      if ($scope.friends[friend].id == userId)
        $scope.activeFriend = $scope.friends[friend];

    $('.messages-message-board .panel-heading').html($scope.activeFriend.name);
  }

  $scope.switchGroups = function(groupId) {
    for(var group in $scope.friendGroups)
      if ($scope.friendGroups[group].id == groupId)
        $scope.activeGroup = $scope.friendGroups[group];
    $scope.friends = $scope.activeGroup.friends;
    console.log($scope.friends[0]);
  }

  $scope.createNewFriendGroup = function() {
    $http.post( basePath + 'api/friendlists', {"name":$scope.NewFriendGroupName})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.deleteGroup = function(groupId) {
    $http.delete( basePath + 'api/friendlists/'+groupId, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.createNewChannel = function() {
    // $http.post( basePath + 'api/friendlists/'+groupId, {})
    // .success(function(data){
    //   console.log(data);
    // })
    // .error(function(data){
    //   alert("Credentials invalid");
    // })
  }

  $scope.deleteChannel = function(groupId) {
    // $http.post( basePath + 'api/friendlists/'+groupId, {})
    // .success(function(data){
    //   console.log(data);
    // })
    // .error(function(data){
    //   alert("Credentials invalid");
    // })
  }

  $scope.friendChangeGroup = function(friendgroupId) {
    // console.log('friendgroupId : '+ friendgroupId);
    // console.log('dragged : ' + $scope.transfertFriendId);
    $http.post( basePath + 'api/friends/' + $scope.transfertFriendId + '/moves/' + friendgroupId, {})
    .success(function(data){
      console.log(data);
      console.log('delete from one group and put in the other group in front (or refresh you lazy fucker !)');
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

});
