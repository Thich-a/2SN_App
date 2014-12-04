App.controller('userCtrl', function ($scope, $http, $window, $location, $routeParams){

  $scope.profileId = $routeParams.id;
  $http.get( basePath + 'api/users/'+$scope.profileId, {})
  .success(function(data){
    $scope.user = data.user;
    $scope.posts = $scope.user.posts;
    $scope.friends = [];

    // getting friends
    var i = 0;
    for (var friendGroup in data.user.friend_groups)
    {
      var friends = data.user.friend_groups[friendGroup].friends;
      for (var friend in friends)
        if (data.user.friend_groups[friendGroup].name != 'wait')
        {
          $scope.friends[i] = friends[friend];
          i++;
        }
    }


    // getting friendlists
    $http.get( basePath + 'api/friendlists/' + data.user.id, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })



    // getting profile album
    for (var album in data.user.albums)
      if (data.user.albums[album].name == 'Profile')
      {
        $http.get( basePath + 'api/albums/'+data.user.albums[album].id, {})
        .success(function(response){
          // $scope.photos = response.album.photos;
          $scope.photos = [
                          {'id':1, 'name':'Avatar', 'description':'AVATAR POWWWA !', 'date':'19/09/2014' ,'url':'avatar.png'},
                          {'id':2, 'name':'Avengers', 'description':'AVERGERS dream team', 'date':'18/09/2014' ,'url':'avengers2SN.png'},
                          {'id':3, 'name':'MERICA !', 'description':'Red White and Blue', 'date':'10/10/2014' ,'url':'AmericaBoy.png'},
                          {'id':4, 'name':'Ruby', 'description':' lorem ipsum bla bla bla', 'date':'21/09/2014' ,'url':'rubyMan.png'},
                          {'id':5, 'name':'FatMan', 'description':'and a diet coke please', 'date':'01/04/2014' ,'url':'cookieMonster.png'},
                          {'id':6, 'name':'#IPSTER', 'description':'I listen to underground music, you probably never heard of it', 'date':'12/03/2013' ,'url':'hipsterMax.png'},
                          {'id':7, 'name':'Tortues Ninja', 'description':'teenage mutant ninja turtles', 'date':'29/10/2014' ,'url':'ninjaTurtles.png'},
                          {'id':8, 'name':'Titanic (Now In 3D)', 'description':'And IIIIIIIIIIIIIIIIIIII will always Loooooooooooooooooove youuuuuuuuuuuu', 'date':'19/02/2014' ,'url':'titanic3D.png'},
                          {'id':9, 'name':'The Lion From Zion', 'description':'Like a lion, from Zion', 'date':'31/12/2013' ,'url':'zionLion.png'}
                        ]
        })
        .error(function(response){
          alert("Oops ! Unable to load user albums");
       })
      }

    $http.get( basePath + 'api/user/me', {})
    .success(function(answer){
      $scope.me = answer.user;
      $scope.checkIfFriend($scope.me);
    })
    .error(function(answer){
      alert("Oops ! unable to fetch current logged user");
    })
  })
  .error(function(data){
    alert("Oops ! an error occured !");
  })

  $scope.checkIfFriend = function(user) {
    for (var friendGroup in user.friend_groups)
    {
      var friends = user.friend_groups[friendGroup].friends;
      for (var friend in friends)
      {
        if (friends[friend].id == $scope.user.id)
          $scope.isFriend = 1;
      }
    }
    $scope.isFriend = 0;
  }

  $scope.AddFriend = function(userId) {
    $http.post( basePath + 'api/friends/'+ userId, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.UnFriend = function(userId) {
    $http.delete( basePath + 'api/friend/'+ friendId, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.deleteUser = function(userId) {
    $http.delete( basePath + 'api/users/'+ userId, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.changedDisplayed = function(photoUrl) {
    $('#userProfilPicturesCurrentDisplay').attr('src', '/webapp/assets/img/galleries/'+photoUrl);
  }

});



