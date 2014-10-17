App.controller('galleriesCtrl', function ($scope, $http, $window, $location){
  $scope.albums = [
  {'id':1, 'name':'toto', 'content':[
    {'id':1, 'name':'Avatar', 'description':'AVATAR POWWWA !', 'date':'19/09/2014' ,'url':'webapp/assets/img/galleries/avatar.png'},
    {'id':2, 'name':'Avengers', 'description':'AVERGERS dream team', 'date':'18/09/2014' ,'url':'webapp/assets/img/galleries/avengers2SN.png'},
    {'id':3, 'name':'MERICA !', 'description':'Red White and Blue', 'date':'10/10/2014' ,'url':'webapp/assets/img/galleries/AmericaBoy.png'},
    {'id':4, 'name':'Ruby', 'description':' lorem ipsum bla bla bla', 'date':'21/09/2014' ,'url':'webapp/assets/img/galleries/rubyMan.png'},
    {'id':5, 'name':'FatMan', 'description':'and a diet coke please', 'date':'01/04/2014' ,'url':'webapp/assets/img/galleries/cookieMonster.png'},
    {'id':6, 'name':'#IPSTER', 'description':'I listen to underground music, you probably never heard of it', 'date':'12/03/2013' ,'url':'webapp/assets/img/galleries/hipsterMax.png'},
    {'id':7, 'name':'Tortues Ninja', 'description':'teenage mutant ninja turtles', 'date':'29/10/2014' ,'url':'webapp/assets/img/galleries/ninjaTurtles.png'},
    {'id':8, 'name':'Titanic (Now In 3D)', 'description':'And IIIIIIIIIIIIIIIIIIII will always Loooooooooooooooooove youuuuuuuuuuuu', 'date':'19/02/2014' ,'url':'webapp/assets/img/galleries/titanic3D.png'},
    {'id':9, 'name':'The Lion From Zion', 'description':'Like a lion, from Zion', 'date':'31/12/2013' ,'url':'webapp/assets/img/galleries/zionLion.png'}
  ]},
  {'id':2, 'name':'tutu', 'content':[
    {'id':1, 'name':'PCI0001243', 'description':'This is a description', 'date':'19/09/2014' ,'url':'webapp/assets/img/galleries/avatar.png'},
    {'id':2, 'name':'PCI0001244', 'description':'This is a description', 'date':'18/09/2014' ,'url':'webapp/assets/img/galleries/avengers2SN.png'},
    {'id':9, 'name':'PCI0001251', 'description':'This is a description', 'date':'31/12/2013' ,'url':'webapp/assets/img/galleries/zionLion.png'}
  ]},
  {'id':3, 'name':'cousins', 'content':[
    {'id':1, 'name':'LES COUSINS', 'description':'This is a description', 'date':'19/09/2014' ,'url':'webapp/assets/img/galleries/cousins.png'}
  ]}
  ];

  // detecting click on photo
  $(document).on('change', '#AlbumSelect', function() {
    $scope.galleriesSwitchAlbum(this.value);
  });

  // detecting click on photo
  $(document).on('click', '#galleries-photo-album div img', function() {
    $scope.galleriesSwitchPhoto(this.getAttribute('imageId'), 0);
  });

  $scope.galleriesArrows = function(direction) {

    var photoId = $('#galleries-photo-album div .active').attr('imageId');

    /////////////////////////////////////// PROBLEM : two calls at once ! /////////////////////////////////////////////
    console.log('CALL here ');
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    for (var album in $scope.albums)
    {
      if ($scope.albums[album].id == albumId)
        $scope.images = $scope.albums[album].content;
    }

    for (var image in $scope.images)
    {
      $('#galleries-photo-album').append('<div><img id="galleries-image-' + $scope.images[image].id + '" imageId="' + $scope.images[image].id + '" src="' + $scope.images[image].url + '"></div>');
    }
    setTimeout(function(){
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

  // Making sure PhotoAlbums have different names
  $('#galleries-album-create-name').keyup(function() {
    var albumName = $('#galleries-album-create-name').val();
    $("#galleries-album-create").prop('disabled', false);
    if (albumName != '')
    {
      $('#AlbumSelect option').each(function(){
        if (this.value == albumName) {
          $("#galleries-album-create").prop('disabled', true);
          return;
        }
      });
    }
    else
      $("#galleries-album-create").prop('disabled', true);
  });

  // setting up on load
  setTimeout(function(){
    $('#AlbumSelect').change();
    $('.selectpicker').selectpicker();
  }, 100);

});
