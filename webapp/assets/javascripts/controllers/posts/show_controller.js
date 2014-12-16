App.controller('postShowCtrl', function ($scope, $http, $window, $location, $route, $routeParams){

  $scope.userid = $routeParams.user;

  $http.get( basePath + 'api/user/'+ $scope.userid, {})
  .success(function(data){
    $scope.user = data.user;

    $http.get( basePath + 'api/blogs/' + $scope.user.id, {})
    .success(function(data){
      $scope.userPosts = data.posts;
      $scope.fetchPost();
    })
  })
  .error(function(data){
    alert("Credentials invalid");
  })

  $http.get( basePath + 'api/me', {})
  .success(function(answer){
    $scope.me = answer.user.id;
    if ($scope.userid == $scope.me || $scope.me == 1)
      $scope.securityFlag = 1;
    else
      $scope.securityFlag = 0;
  })

  $scope.fetchPost = function() {
    for (var post in $scope.userPosts)
    {
      if ($scope.userPosts[post].id == $routeParams.id)
      {
        $scope.currentPost = $scope.userPosts[post];
        $scope.comments = $scope.currentPost.comments;
      }
    }
  }

  $scope.deletePost = function() {
    $http.delete( basePath + 'api/blogs/'+ $scope.currentPost.id, {})
    .success(function(data){
      $location.path('/users/' + $scope.user.id + '/posts');
    })
  }

  $scope.comment = function() {
    var comment = $('#posts-create-new-comment').val();
    $http.post( basePath + 'api/comments/'+ $scope.currentPost.id, {'content':comment})
    .success(function(data){
      window.location.reload()
    })
  }

  $scope.deleteComment = function(event) {
    var commentId = event.target.getAttribute('name');
    $http.delete( basePath + 'api/comments/'+ commentId, {})
    .success(function(data){
      window.location.reload()
    })
  }
});
