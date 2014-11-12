App.controller('usersCtrl', function ($scope, $http, $window, $location){

$scope.users = [{
    "id": 1,
    "username": "admin",
    "username_canonical": "admin",
    "email": "admin@mail.com",
    "email_canonical": "admin@mail.com",
    "enabled": true,
    "salt": "lcg0vg1qw6osgwgc08osgwoog0cgogk",
    "password": "zSlnC1PYCfBLt4OUUVx0cdY3zrf+8jDw+xnt2qyC4apeAyAr5+MF2D7c3fTPM0gmLPO+Q\/u+rEn2PCBWmyL+\/w==",
    "last_login": "2014-11-07T15:26:13+0100",
    "locked": false,
    "expired": false,
    "roles": [],
    "credentials_expired": false,
    "image_profile": "yinfei.png",
    "friend_groups": [{
      "id": 1,
      "name": "general",
      "friends": []
    }, {
      "id": 2,
      "name": "wait",
      "friends": []
    }],
    "posts": [{
      "id": 1,
      "content": "Hey Welcome !",
      "created_at": "2014-11-07T15:26:13+0100",
      "updated_at": "2014-11-07T15:26:13+0100",
      "comments": []
    }],
    "albums": [{
      "id": 1,
      "name": "Wall",
      "slug": "wall",
      "created_at": "2014-11-07T15:26:13+0100",
      "updated_at": "2014-11-07T15:26:13+0100",
      "photos": []
    }]
  }, {
    "id": 2,
    "username": "test",
    "username_canonical": "test",
    "email": "test@mail.com",
    "email_canonical": "test@mail.com",
    "enabled": true,
    "salt": "3migxhhheh8g4gcwcw8ws80c8c4ggos",
    "password": "r+TeCU5eLB1yr8gpphSh6jF4VBWs1A20t\/gYeu\/Tw9sB6UVnveB8hKfJEuAeGzSaghfOMI6U1lVYmf70HMzZtg==",
    "last_login": "2014-11-07T15:29:03+0100",
    "locked": false,
    "expired": false,
    "roles": [],
    "credentials_expired": false,
    "image_profile": "gollum.jpg",
    "friend_groups": [{
      "id": 3,
      "name": "general",
      "friends": []
    }, {
      "id": 4,
      "name": "wait",
      "friends": []
    }],
    "posts": [{
      "id": 2,
      "content": "Hey Welcome !",
      "created_at": "2014-11-07T15:26:23+0100",
      "updated_at": "2014-11-07T15:26:23+0100",
      "comments": []
    }, {
      "id": 3,
      "content": "Beckbeck petit gitanos",
      "created_at": "2014-11-07T15:29:49+0100",
      "updated_at": "2014-11-07T15:29:49+0100",
      "comments": []
    }],
    "albums": [{
      "id": 2,
      "name": "Wall",
      "slug": "wall-1",
      "created_at": "2014-11-07T15:26:23+0100",
      "updated_at": "2014-11-07T15:26:23+0100",
      "photos": []
    }]
  }, {
    "id": 3,
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
  }]
});
