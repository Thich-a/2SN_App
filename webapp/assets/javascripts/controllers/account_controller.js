App.controller('accountCtrl', function ($scope, $http, $window, $location, AuthService){

  $http.get( basePath + 'api/user/me', {})
  .success(function(data){
    $scope.user = data.user;

    for (var album in $scope.user.albums)
      if ($scope.user.albums[album].name == 'Profile')
        $scope.albumId = $scope.user.albums[album].id;
    $http.get( basePath + 'api/albums/'+$scope.albumId, {})
    .success(function(answer){ $scope.images = answer.album.photos; $scope.currentImage = $scope.images[0]; })
    .error(function(answer){ console.log('error !'); })

  })
  .error(function(data){
    alert("Credentials invalid");
  })

  $scope.DeleteAccount = function() {
    $http.delete( basePath + 'api/users/' + $scope.user.id, {})
    .success(function(data){
      console.log(data);
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.changeProfilePicture = function() {
    $http.post( basePath + 'api/profiles/' + $scope.currentImage.id, {})
    .success(function(data){
      $scope.user.image_profile = $scope.currentImage.image_name;
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.changedDisplayed = function(imageId) {
    for (var image in $scope.images)
      if ($scope.images[image].id == imageId)
        $scope.currentImage = $scope.images[image];
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
          });
        }
      });
  });

  $scope.clickNextInput = function(event) {
    var Uploader = $('#' + event.target.getAttribute('id')).next();
    Uploader.click();
  }

  $scope.upload = function() {
    var filecontent = $scope.fileContent;
    var file = $scope.file;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", basePath + 'api/photos/' + $scope.albumId, false);
    xmlhttp.setRequestHeader("Content-Type", "image/*");
    xmlhttp.setRequestHeader("Authentification", AuthService.getToken());
    xmlhttp.onload = function() { console.log('YEAH UPLOADING SOMETHING !');}
    filecontent = filecontent.split(',');
    filecontent = filecontent[1];
    imageFile = {"file":filecontent, "name":file.name};
    xmlhttp.send('{"content":"' + $scope.newImageContent + '", "imageFile":'+JSON.stringify(imageFile)+'}');
    $scope.newImageContent = '';

    // HERE ! NEED TO GET MESSAGE BACK FROM API TO SET IMAGE ID AND NAME !
    // $scope.currentImage = ...
    // $scope.changeProfilePicture();
  }
});
