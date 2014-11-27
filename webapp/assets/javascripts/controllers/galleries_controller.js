App.controller('galleriesCtrl', function ($scope, $http, $window, $location, $route, $routeParams){

  $scope.userid = $routeParams.user;

  $http.get( basePath + 'api/users/'+$scope.userid, {})
  .success(function(data){
    $scope.user = data.user;
    $scope.albums = $scope.user.albums;
    console.log(data);
    // setting up on load
    setTimeout(function(){
      $('#AlbumSelect').change();
      $('.selectpicker').selectpicker();
    }, 100);
  })
  .error(function(data){
    alert("Credentials invalid");
  })

  // $scope.albums = [
  // {'id':1, 'name':'toto', 'content':[
  //   {'id':1, 'name':'Avatar', 'description':'AVATAR POWWWA !', 'date':'19/09/2014' ,'url':'webapp/assets/img/galleries/avatar.png'},
  //   {'id':2, 'name':'Avengers', 'description':'AVERGERS dream team', 'date':'18/09/2014' ,'url':'webapp/assets/img/galleries/avengers2SN.png'},
  //   {'id':3, 'name':'MERICA !', 'description':'Red White and Blue', 'date':'10/10/2014' ,'url':'webapp/assets/img/galleries/AmericaBoy.png'},
  //   {'id':4, 'name':'Ruby', 'description':' lorem ipsum bla bla bla', 'date':'21/09/2014' ,'url':'webapp/assets/img/galleries/rubyMan.png'},
  //   {'id':5, 'name':'FatMan', 'description':'and a diet coke please', 'date':'01/04/2014' ,'url':'webapp/assets/img/galleries/cookieMonster.png'},
  //   {'id':6, 'name':'#IPSTER', 'description':'I listen to underground music, you probably never heard of it', 'date':'12/03/2013' ,'url':'webapp/assets/img/galleries/hipsterMax.png'},
  //   {'id':7, 'name':'Tortues Ninja', 'description':'teenage mutant ninja turtles', 'date':'29/10/2014' ,'url':'webapp/assets/img/galleries/ninjaTurtles.png'},
  //   {'id':8, 'name':'Titanic (Now In 3D)', 'description':'And IIIIIIIIIIIIIIIIIIII will always Loooooooooooooooooove youuuuuuuuuuuu', 'date':'19/02/2014' ,'url':'webapp/assets/img/galleries/titanic3D.png'},
  //   {'id':9, 'name':'The Lion From Zion', 'description':'Like a lion, from Zion', 'date':'31/12/2013' ,'url':'webapp/assets/img/galleries/zionLion.png'}
  // ]},
  // {'id':2, 'name':'tutu', 'content':[
  //   {'id':1, 'name':'PCI0001243', 'description':'This is a description', 'date':'19/09/2014' ,'url':'webapp/assets/img/galleries/avatar.png'},
  //   {'id':2, 'name':'PCI0001244', 'description':'This is a description', 'date':'18/09/2014' ,'url':'webapp/assets/img/galleries/avengers2SN.png'},
  //   {'id':9, 'name':'PCI0001251', 'description':'This is a description', 'date':'31/12/2013' ,'url':'webapp/assets/img/galleries/zionLion.png'}
  // ]},
  // {'id':3, 'name':'cousins', 'content':[
  //   {'id':1, 'name':'LES COUSINS', 'description':'This is a description', 'date':'19/09/2014' ,'url':'webapp/assets/img/galleries/cousins.png'}
  // ]}
  // ];

  // detecting click on photo
  $(document).on('change', '#AlbumSelect', function() {
    $scope.galleriesSwitchAlbum(this.value);
  });

  $(document).on('change', '#AlbumSelect', function() {
    $scope.galleriesSwitchAlbum(this.value);
  });

  // detecting click on photo
  $(document).on('click', '#galleries-photo-album div img', function() {
    $scope.galleriesSwitchPhoto(this.getAttribute('imageId'), 0);
  });

  $scope.galleriesArrows = function(direction) {

    var photoId = $('#galleries-photo-album div .active').attr('imageId');
    for (var i = 0; i < $scope.images.length; i++)
    {
      if (($scope.images[i].id == photoId) && (direction == 'left'))
        var next = $scope.images[i - 1];
      else if (($scope.images[i].id == photoId) && (direction == 'right'))
        var next = $scope.images[i + 1];
    }
    if (typeof next != 'undefined')
      $scope.galleriesSwitchPhoto(next.id);
  }

  $scope.galleriesSwitchAlbum = function(albumId) {
    $('#galleries-photo-album').html('');
    $('#galleries-album-delete').prop('disabled', false);
    for (var album in $scope.albums)
    {
      if ($scope.albums[album].id == albumId)
      {
        $scope.images = $scope.albums[album].content;
        if ($scope.albums[album].name == 'Wall' || $scope.albums[album].name == 'Profile')
          $('#galleries-album-delete').prop('disabled', true);
      }

    }

    for (var image in $scope.images)
    {
      $('#galleries-photo-album').append('<div><img id="galleries-image-' + $scope.images[image].id + '" imageId="' + $scope.images[image].id + '" src="' + $scope.images[image].url + '"></div>');
    }
    setTimeout(function(){
      if (typeof $('#galleries-photo-album div img')[0] != 'undefined')
        $('#galleries-photo-album div img')[0].click();
    }, 100);
  }

  $scope.galleriesSwitchPhoto = function(photoId) {
    for (var image in $scope.images)
    {
      if ($scope.images[image].id == photoId)
        var photo = $scope.images[image];
    }

    if (typeof photo != 'undefined')
    {
      $('#galleries-photo-album div .active').removeClass('active');
      $('#galleries-image-' + photoId).addClass('active');
      $('#galleries-photo-display').html('<img src="' + photo.url + '">');
      $('#galleries-picture-name').html(photo.name);
      $('#galleries-picture-date').html(photo.date);
      $('#galleries-picture-album').html('in Album : ' + $('.btn.dropdown-toggle.selectpicker.btn-default')[0].getAttribute('title'));
      $('#galleries-picture-description').html(photo.description);
    }
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

    console.log(albumId);
    $http.delete( basePath + 'api/albums/' + albumId, {})
    .success(function(data){
      $route.reload();
    })
    .error(function(data){
      alert("Credentials invalid");
    })
  }





  // trying to upload image (name and content are static);

  $(function () {
      $(":file").change(function () {
        if (this.files && this.files[0])
        {
          var reader = new FileReader();
          reader.readAsDataURL(this.files[0]);
          $scope.mangeMonZizi(this.files[0]);
        }
      });
  });

  $scope.toto = function(event) {
    var Uploader = $('#' + event.target.getAttribute('id')).next();
    Uploader.click();
  }

  $scope.addPhoto = function(imageFile) {
    console.log(imageFile);
    var albumId = $('#AlbumSelect').val();

    // $http.post( basePath + 'api/photos/' + albumId, {"content":"description", "imageFile":imageFile, "imageName":"toto"})
    // .
  }











  // Making sure PhotoAlbums have different names
  $('#galleries-album-create-name').keyup(function() {
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
  });
});
