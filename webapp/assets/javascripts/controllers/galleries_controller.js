App.controller('galleriesCtrl', function ($scope, $http, $window, $location, $route, $routeParams, AuthService){

  $scope.userid = $routeParams.user;

  $http.get( basePath + 'api/user/'+$scope.userid, {})
  .success(function(data){
    $scope.user = data.user;

    $http.get( basePath + 'api/albums/' + $scope.user.id, {})
    .success(function(data){
      $scope.albums = data.albums;
      $scope.defaultModel = $scope.albums[0].id;
      $scope.defaultNameModel = '';
      $scope.galleriesSwitchAlbum($scope.albums[0].id);
    })

    $http.get( basePath + 'api/me', {})
    .success(function(answer){ $scope.me = answer.user; })
    .error(function(answer){ console.log('Oh no ! something went wrong ...'); })
  })
  .error(function(data){
    alert("Credentials invalid");
  })

  $scope.galleriesArrows = function(direction) {
    for (var i = 0; i < $scope.images.length; i++)
    {
      if (($scope.images[i].id == $scope.currentImage.id) && (direction == 'left'))
        var next = $scope.images[i - 1];
      else if (($scope.images[i].id == $scope.currentImage.id) && (direction == 'right'))
        var next = $scope.images[i + 1];
    }
    if (typeof next != 'undefined')
      $scope.galleriesSwitchPhoto(next.id);
  }

  $scope.galleriesSwitchAlbum = function(albumId) {
    if (typeof albumId == 'undefined')
      albumId = $('#AlbumSelect').val();
    $('#galleries-album-delete').prop('disabled', false);
    for (var album in $scope.albums)
      if ($scope.albums[album].id == albumId)
      {
        $scope.currentAlbum = $scope.albums[album];
        $scope.images = $scope.currentAlbum.photos;
        $scope.currentImage = $scope.images[0];
        if ($scope.albums[album].name == 'Wall' || $scope.albums[album].name == 'Profile')
          $('#galleries-album-delete').prop('disabled', true);
      }
  }

  $scope.galleriesSwitchPhoto = function(photoId) {
    // Getting current Image
    for (var image in $scope.images)
      if ($scope.images[image].id == photoId)
        $scope.currentImage = $scope.images[image];
  }

  $scope.createAlbum = function() {
    var albumName = $scope.newAlbumName;
    $http.post( basePath + 'api/albums', {"name":albumName})
    .success(function(data){
      window.location.reload()
      $('.modal-backdrop.fade.in').hide();
    })
  }

  $scope.deleteAlbum = function() {
    var albumId = $('#AlbumSelect').val();
    $http.delete( basePath + 'api/albums/' + albumId, {})
    .success(function(data){
      window.location.reload()
      $('.modal-backdrop.fade.in').hide();
    })
  }

  $scope.deleteImage = function() {
    $http.delete( basePath + 'api/photos/'+ $scope.currentImage.id, {})
    .success(function(data){
      window.location.reload()
      $('.modal-backdrop.fade.in').hide();
    })
  }

  $scope.clickNextInput = function(event) {
    var Uploader = $('#' + event.target.getAttribute('id')).next();
    Uploader.click();
  }

  $scope.upload = function() {
    var xmlhttp = new XMLHttpRequest();
    var formdata = new FormData(document.getElementById('galleriesUploadForm'));
    var albumId = $('#AlbumSelect').val();
    xmlhttp.open("POST", basePath + 'api/photos/' + albumId, false);
    xmlhttp.setRequestHeader("Authorization", AuthService.getToken());
    xmlhttp.onload = function() { console.log('Upload successfull !!!');}
    xmlhttp.send(formdata);
    if (xmlhttp.status == 200)
    {
      $('.modal-backdrop.fade.in').hide();
      window.location.reload()
    }
  }

  $scope.checkUnique = function() {
    $scope.newAlbumName = $('#galleries-album-create-name').val();
    $('#shownewAlbumName').html($scope.newAlbumName);
    $("#galleries-album-create").prop('disabled', false);
    if ($scope.newAlbumName != '')
    {
      for(album in $scope.albums)
        if ($scope.albums[album].name == $scope.newAlbumName)
          $("#galleries-album-create").prop('disabled', true);
    }
    else
      $("#galleries-album-create").prop('disabled', true);
  }

});
