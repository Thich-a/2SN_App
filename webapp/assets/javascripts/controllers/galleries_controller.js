App.controller('galleriesCtrl', function ($scope, $http, $window, $location, $route, $routeParams, AuthService){

  $scope.userid = $routeParams.user;

  $http.get( basePath + 'api/users/'+$scope.userid, {})
  .success(function(data){
    $scope.user = data.user;
    $scope.albums = $scope.user.albums;
    $scope.defalutModel = $scope.user.albums[0].id;
    $scope.defalutNameModel = '';
    $scope.galleriesSwitchAlbum($scope.user.albums[0].id);

    $http.get( basePath + 'api/user/me', {})
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
        // Getting the current Album from API
        $http.get( basePath + 'api/albums/'+albumId, {})
        .success(function(data){ $scope.currentAlbum = data.album; $scope.images = data.album.photos; })
        .error(function(data){ console.log('error !'); })

        // Adding Security WHAT WHAT !
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
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.deleteAlbum = function() {
    var albumId = $('#AlbumSelect').val();
    $http.delete( basePath + 'api/albums/' + albumId, {})
    .success(function(data){
      for (var album in $scope.albums)
        if ($scope.albums[album].id == albumId)
          delete($scope.albums[album]);

      $('option').each(function() {
        $scope.defalutModel = '';
        if ($(this)[0].getAttribute('value') == '' || $(this)[0].getAttribute('value') == albumId)
          $(this).remove();
      });
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  // Uploading Images
  $(function () {
      $(":file").change(function () {
        if (this.files && this.files[0])
        {
          var reader = new FileReader();
          reader.readAsDataURL(this.files[0]);
          var file = this.files[0];
          reader.onload = (function(){
            $scope.fileContent = reader.result;
            $scope.file = file;
            $('#picture-new').show();
          });
        }
      });
  });

  $scope.deleteImage = function() {
    $http.delete( basePath + 'api/photos/'+ $scope.currentImage.id, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.clickNextInput = function(event) {
    var Uploader = $('#' + event.target.getAttribute('id')).next();
    Uploader.click();
  }

  $scope.upload = function() {
    var filecontent = $scope.fileContent;
    var file = $scope.file;
    var albumId = $('#AlbumSelect').val();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", basePath + 'api/photos/' + albumId, false);
    xmlhttp.setRequestHeader("Content-Type", "image/*");
    xmlhttp.setRequestHeader("Authentification", AuthService.getToken());
    xmlhttp.onload = function() { console.log('YEAH UPLOADING SOMETHING !');}
    filecontent = filecontent.split(',');
    filecontent = filecontent[1];
    var content = $scope.newImageContent;
    imageFile = {"file":filecontent, "name":file.name};
    xmlhttp.send('{"content":"' + content + '", "imageFile":'+JSON.stringify(imageFile)+'}');
    $scope.newImageContent = '';
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
