App.controller('postShowCtrl', function ($scope, $http, $window, $location, $routeParams){

  $scope.userid = $routeParams.user;

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
      "image_profile": "yinfei.png",
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
        "comments": [{"id":1,
                      "user":{"username":"toto", "image_profile":"beck.jpg"},
                      "content":"Toto Bolo ma gueule"
                    }]
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

  $scope.userPosts = $scope.user.posts;

  $scope.fetchPost = function() {
    for (post in $scope.userPosts)
    {
      if ($scope.userPosts[post].id == $routeParams.id)
        $scope.currentPost = $scope.userPosts[post];
    }
  }
  $scope.fetchPost();
  $scope.comments = $scope.currentPost.comments;
});
