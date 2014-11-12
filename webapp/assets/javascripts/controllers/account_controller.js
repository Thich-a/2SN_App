App.controller('accountCtrl', function ($scope, $http, $window, $location){

  $scope.user = {
      "id": 3,
      "plan":2,
      "username": "beck",
      "username_canonical": "beck",
      "email": "beck@mail.com",
      "email_canonical": "beck@mail.com",
      "enabled": true,
      "salt": "pcy4ecsaneo088wkwko8880o4wcg0gg",
      "password": "VfDot+qja2uQzKNqabwmkHyR8jSSZimg1YtA9q0skrwHfWLl+nL2VEEw39rSRgOXFUAA7kWZBUdRj34vNxJvqg==",
      "locked": false,
      "expired": false,
      "roles": [],
      "credentials_expired": false,
      "image_profile": "beck.jpg",
      "friend_groups": [{
        "id": 5,
        "name": "general",
        "friends": []
      }, {
        "id": 6,
        "name": "wait",
        "friends": []
      }],
      "posts": [{
        "id": 4,
        "content": "Hey Welcome !",
        "created_at": "2014-11-07T15:49:25+0100",
        "updated_at": "2014-11-07T15:49:25+0100",
        "comments": []
      }],
      "albums": [{
        "id": 3,
        "name": "Wall",
        "slug": "wall-2",
        "created_at": "2014-11-07T15:49:25+0100",
        "updated_at": "2014-11-07T15:49:25+0100",
        "photos": []
      }, {
        "id": 4,
        "name": "Profile",
        "slug": "profile",
        "created_at": "2014-11-07T15:49:25+0100",
        "updated_at": "2014-11-07T15:49:25+0100",
        "photos": []
      }]
    };

  $scope.plans = [{
                    'id' : 1,
                    'name' : 'Freemium'
                  },
                  {
                    'id' : 2,
                    'name' : 'Plus'
                  },
                  {
                    'id' : 3,
                    'name' : 'Premium'
                  }];

  $scope.setUserPlan = function(userPlan) {
    for (plan in $scope.plans)
      if ($scope.plans[plan].id == userPlan)
        $scope.userPlan = $scope.plans[plan];
  }

  $scope.setUserPlan($scope.user.plan);

  $('#account-picture').attr('src', 'webapp/assets/img/fixtures-pictures/' + $scope.user.image_profile);
  $('#account-username').html($scope.user.username);
  $('#account-usermail').val($scope.user.email);

  setTimeout(function(){
    $('#planSelect').val($scope.userPlan.id);
    $('.selectpicker').selectpicker();
  }, 100);

});
