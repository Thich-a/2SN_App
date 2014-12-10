App.controller('postShowCtrl', function ($scope, $http, $window, $location, $route, $routeParams){

  $scope.userid = $routeParams.user;

  $http.get( basePath + 'api/users/'+ $scope.userid, {})
  .success(function(data){
    $scope.user = data.user;
    $scope.userPosts = $scope.user.posts;
    $scope.fetchPost();
  })
  .error(function(data){
    alert("Credentials invalid");
  })

  $http.get( basePath + 'api/user/me', {})
  .success(function(answer){
    $scope.me = answer.user.id;
    if ($scope.userid == $scope.me || $scope.me == 1)
      $scope.securityFlag = 1;
    else
      $scope.securityFlag = 0;
  })
  .error(function(answer){
    console.log('fuck this shit');
  })



  $scope.fetchPost = function() {
    for (post in $scope.userPosts)
    {
      if ($scope.userPosts[post].id == $routeParams.id)
        $scope.currentPostId = $scope.userPosts[post];
    }

    $http.get(basePath + 'api/blogs/'+ $scope.currentPostId.id, {})
    .success(function(data){
      $scope.currentPost = data.post;
      $scope.comments = data.post.comments;
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.deletePost = function() {
    $http.delete( basePath + 'api/blogs/'+ $scope.currentPost.id, {})
    .success(function(data){
      $location.path('/users/' + $scope.user.id + '/posts');
    })
    .error(function(data){
      alert("Oops ! an error occured");
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
