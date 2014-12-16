App.controller('accountCtrl', function ($scope, $http, $window, $location, $route, AuthService, $cookies){

  $http.get( basePath + 'api/user/me', {})
  .success(function(data){
    $scope.user = data.user;


    $http.get( basePath + 'api/albums/' + $scope.user.id, {})
    .success(function(data){
      console.log(data);
      $scope.albums = data.albums;

      $scope.photos = [];
      for (var album in $scope.albums)
        if ($scope.albums[album].name == 'Profile')
        {
          $scope.albumId = $scope.albums[album].id;
          $scope.photos = $scope.albums[album].photos;
        }
    })

  })
  .error(function(data){
    console.log('Unable to get current User ...');
  })

  $scope.DeleteAccount = function() {
    $http.delete( basePath + 'api/users/' + $scope.user.id, {})
    .success(function(data){
      AuthService.deleteToken();
      $cookies.Auth = '';
      $location.path('/');
    })
    .error(function(data){
      console.log('Unable to delete User ...');
    })
  }

  $scope.editUserPassword = function() {
    $http.put( basePath + 'api/password', {"current_password":$scope.CurrentPassword,"plainPassword":{"first":$scope.newPassword1,"second":$scope.newPassword2}})
    .success(function(data){
      if (data.code == 200)
      {
        $('#accountMessageReciever').html('<p style="text-align:center;">password edited</p>');
        $('#accountMessageReciever').css('color', 'green');
        $scope.CurrentPassword = '';
        $scope.newPassword1 = '';
        $scope.newPassword2 = '';
      }
      else
      {
        $('#accountMessageReciever').html('<p style="text-align:center;">please specify current password, and input new password twice</p>');
        $('#accountMessageReciever').css('color', 'red');
      }
    })
    .error(function(data){
      console.log('Unable to delete User ...');
    })
  }

  $scope.editUser = function() {
    // { "email":"test@mail.com", "username":"test", "plainPassword":{"first":"test","second":"test"} }

    $http.put( basePath + 'api/users/' + $scope.user.id, {"email":$scope.user.email, "username":$scope.user.username, "current_password":$scope.CurrentPassword})
    .success(function(data){
      if (data.code == 200)
      {
        $('#accountMessageReciever').html('<p style="text-align:center;">user edited</p>');
        $('#accountMessageReciever').css('color', 'green');
      }
      else
      {
        $('#accountMessageReciever').html('<p style="text-align:center;">please specify username, usermail and current password</p>');
        $('#accountMessageReciever').css('color', 'red');
      }
    })
    .error(function(data){
      console.log('Unable to delete User ...');
    })
  }

  $scope.changeProfilePicture = function() {
    $http.post( basePath + 'api/profiles/' + $scope.currentImage.id, {})
    .success(function(data){
      $scope.user.image_profile = $scope.currentImage.image_name;
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }

  $scope.changedDisplayed = function(imageId) {
    for (var image in $scope.photos)
      if ($scope.photos[image].id == imageId)
        $scope.currentImage = $scope.photos[image];
  }

  $scope.clickNextInput = function(event) {
    var Uploader = $('#' + event.target.getAttribute('id')).next();
    Uploader.click();
  }

  $scope.upload = function() {
    var xmlhttp = new XMLHttpRequest();
    var formdata = new FormData(document.getElementById('beckbeck'));
    xmlhttp.open("POST", basePath + 'api/photos/' + $scope.albumId, false);
    xmlhttp.setRequestHeader("Authorization", AuthService.getToken());
    xmlhttp.onload = function() { console.log('Upload successfull !!!');}
    xmlhttp.send(formdata);
    if (xmlhttp.status == 200)
    {
      $scope.currentImage = JSON.parse(xmlhttp.responseText).data;
      $scope.changeProfilePicture();
    }
  }
});

