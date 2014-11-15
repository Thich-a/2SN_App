App.controller('postsCtrl', function ($scope, $http, $window, $location, $routeParams){

  $scope.userid = $routeParams.user;

  $http.get( basePath + 'api/users/'+ $scope.userid, {})
  .success(function(data){
    $scope.user = data.user;
    console.log($scope.user);
    console.log($scope.user.posts);
    $scope.userPosts = $scope.user.posts;
  })
  .error(function(data){
    alert("Credentials invalid");
  });

  $scope.createPost = function() {
    var post = $('#posts-create-new-post').val();
    $http.post( basePath + 'api/blogs', {"content":post})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    });
  }
});
