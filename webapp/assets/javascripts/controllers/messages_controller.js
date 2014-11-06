App.controller('messagesCtrl', function ($scope, $http, $window, $location){

  $scope.user = {
                  'id' :       1,
                  'username' : 'Yinfei',
                  'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png',
                  'friendgroups':[{
                                  'id' : 1,
                                  'name' : 'ETNA',
                                  'friends' : [{
                                                'id' : 1,
                                                'username' : 'Yinfei',
                                                'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png',
                                                },
                                                {
                                                  'id' : 2,
                                                  'username' : 'toto',
                                                  'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png',
                                                },
                                                {
                                                  'id' : 3,
                                                  'username' : 'bolo',
                                                  'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png',
                                                }]
                                  },
                                  {
                                  'id' : 2,
                                  'name' : 'Work',
                                  'friends' : [{
                                                'id' : 7,
                                                'username' : 'jeanmichel',
                                                'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png',
                                                },
                                                {
                                                  'id' : 8,
                                                  'username' : 'bobby',
                                                  'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png',
                                                },
                                                {
                                                  'id' : 12,
                                                  'username' : 'Johnny Haliday',
                                                  'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png',
                                                }]
                                  }]
                };

  $scope.friendGroups = $scope.user.friendgroups;

  switchConversation = function(userId) {
    for(var friend in $scope.activeGroup.friends)
      if ($scope.activeGroup.friends[friend].id == userId)
        $scope.activeFriend = $scope.activeGroup.friends[friend];

    $('.messages-message-board .panel-heading').html($scope.activeFriend.username);
  }

  switchGroups = function(groupId) {
    for(var group in $scope.user.friendgroups)
      if ($scope.user.friendgroups[group].id == groupId)
        $scope.activeGroup = $scope.user.friendgroups[group];

    $('#messages-friends-in-group').html('');
    for (var friend in $scope.activeGroup.friends)
    {
      $('#messages-friends-in-group').append('<div class="row"><div class="col-xs-3 col-xs-offset-1"><img src="' + $scope.activeGroup.friends[friend].avatar + '" class="img-rounded small-picture"></div><div class="col-xs-7"><h4 style="margin-top:4px;" name="' + $scope.activeGroup.friends[friend].id + '" onclick="switchConversation(this.getAttribute(\'name\'))">' + $scope.activeGroup.friends[friend].username + '</h4></div></div><hr>');
    }
  }

});
