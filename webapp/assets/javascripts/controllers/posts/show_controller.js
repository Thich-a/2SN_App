App.controller('postShowCtrl', function ($scope, $http, $window, $location, $route, $routeParams){

  $scope.userid = $routeParams.user;

  $http.get( basePath + 'api/users/'+ $scope.userid, {})
  .success(function(data){
    $scope.user = data.user;
    $scope.userPosts = $scope.user.posts;
    $scope.fetchPost();
    $scope.comments = $scope.currentPost.comments;
  })
  .error(function(data){
    alert("Credentials invalid");
  })

  $scope.fetchPost = function() {
    for (post in $scope.userPosts)
    {
      if ($scope.userPosts[post].id == $routeParams.id)
        $scope.currentPost = $scope.userPosts[post];
    }
  }

  $scope.deletePost = function() {
    $http.delete( basePath + 'api/blogs/'+ $scope.currentPost.id, {})
    .success(function(data){
      $location.path('/users/' + $scope.user.id + '/posts');
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.comment = function() {
    var comment = $('#posts-create-new-comment').val();
    $http.post( basePath + 'api/comments/'+ $scope.currentPost.id, {'content':comment})
    .success(function(data){
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.deleteComment = function(event) {
    var commentId = event.target.getAttribute('name');
    $http.delete( basePath + 'api/comments/'+ commentId, {})
    .success(function(data){
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }
});
