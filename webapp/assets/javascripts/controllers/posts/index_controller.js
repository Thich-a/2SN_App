App.controller('postsCtrl', function ($scope, $http, $window, $location, $route, $routeParams){

  $scope.userid = $routeParams.user;

  $http.get( basePath + 'api/users/'+ $scope.userid, {})
  .success(function(data){
    $scope.user = data.user;

    $http.get( basePath + 'api/blogs/' + $scope.user.id, {})
    .success(function(data){
      console.log(data);
      $scope.userPosts = data.posts;
    })
    .error(function(data){
      alert("Credentials invalid");
    })

    $http.get( basePath + 'api/user/me', {})
    .success(function(data){
      $scope.me = data.user;
    })
    .error(function(data){
      alert("Credentials invalid");
    });

  })
  .error(function(data){
    alert("Credentials invalid");
  });

  $scope.createPost = function() {
    var post = $('#posts-create-new-post').val();
    $http.post( basePath + 'api/blogs', {"content":post})
    .success(function(data){
      console.log(data);
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    });
  }
});
