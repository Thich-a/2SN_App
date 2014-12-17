App.controller('gameSessionsCtrl', function ($scope, $http, $window, $location, AuthService){


  $scope.liste_UserInvite = [];
  $scope.liste_UserInviteEdit = [];
  $scope.playIndispo = [];
  $scope.liste_UserDemande = [];
  $scope.liste_UserDemande2 = [];
  $scope.incDemande = 0;
  $scope.incDemande2 = 0;

  $http.get( basePath + 'api/me', {})
  .success(function(data){
    $scope.user = data.user;
    // console.log($scope.user);

    $http.get( basePath + 'api/games/' + $scope.user.id, {})
    .success(function(game){
      $scope.gamesMaster = game.listGameSessionMaster;
      $scope.gamesJoin = game.listGameSessionPlayer;
      // console.log($scope.gamesJoin);
    })

    $http.get( basePath + 'api/users', {})
    .success(function(data){
      $scope.users = data.users;
      $scope.liste_UserClean();
    })

    $http.get( basePath + 'api/invitation', {})
    .success(function(data){
      $scope.invites = data.listInvitation;
    })

    $http.get( basePath + 'api/sheets/' + $scope.user.id, {})
    .success(function(data){
      $scope.sheets = data.character_sheets;
    })

});
// -------------------------------------CREAT GAME--------------------------- Liste des Users Sans Moi
$scope.liste_UserClean = function(){
    var i = 0;
    for(userOther in $scope.users)
    {
      if ($scope.users[userOther].id != $scope.user.id)
      {
        $scope.liste_UserInvite[i] = $scope.users[userOther];
        i++;
      }
    }
  }

// // ------------------------------------------------------------- EDIT GAME SESSION

$scope.liste_UserNot = function(idGame){

  $scope.playIndispo = [];
  $http.get( basePath + 'api/game/'+idGame, {})
  .success(function(data)
    {
      console.log(data);
      $scope.playerJoinEdit = data.GameSession.players;
      $scope.playerGuestEdit = data.GameSession.guests;
      var i = 0;
      for(userNot2 in $scope.playerGuestEdit)
      {
         $scope.playIndispo[i] = $scope.playerGuestEdit[userNot2].guest;
         i++;
      }
      for(userNot in $scope.playerJoinEdit)
      {
         $scope.playIndispo[i] = $scope.playerJoinEdit[userNot].user;
         i++;
      }
      var j = 0;
      $scope.listPlayerEdit = [];
      for ( usDisp in $scope.liste_UserInvite )
      {
        if ( $scope.playIndispo[0] != null )
        {
          var verif = 0;
          for ( usDisp2 in $scope.playIndispo )
          {
            if ( $scope.liste_UserInvite[usDisp].id == $scope.playIndispo[usDisp2].id )
              verif++;
          }
          if ( verif == 0 )
          {
             $scope.listPlayerEdit[j] = $scope.liste_UserInvite[usDisp];
             j++;
          }
        }
        else
        {
          $scope.listPlayerEdit[j] = $scope.liste_UserInvite[usDisp];
          j++;
        }
      }
      for ( gameSel in $scope.gamesMaster)
      {
        if ( $scope.gamesMaster[gameSel].id == idGame )
        {
          $scope.nameGameEdit = $scope.gamesMaster[gameSel].name;
          $scope.storyGameEdit = $scope.gamesMaster[gameSel].description;
        }
      }
    })
  }

$scope.liste_UserAskJoinEdite = function(id){
  for(user in $scope.listPlayerEdit)
  {
    if($scope.listPlayerEdit[user].id == id)
    {
      $scope.liste_UserDemande2[$scope.incDemande2] = $scope.listPlayerEdit[user];
      $scope.incDemande2++;
    }
  }
}

$scope.addToGameEdite = function(){
  var i = 0;
  for(user in $scope.listPlayerEdit)
  {
    for(player in $scope.liste_UserDemande2)
    {
      if($scope.listPlayerEdit[user].id == $scope.liste_UserDemande2[player].id)
      {
        $scope.listPlayerEdit.splice(i, 1);
      }
    }
    i++;
  }
}

$scope.removeToGameEdite = function(id){
  var i = 0;
  for(player in $scope.liste_UserDemande2)
  {
    if ($scope.liste_UserDemande2[player].id == id)
    {
      $scope.listPlayerEdit.splice(0, 0, $scope.liste_UserDemande2[player]);
      $scope.liste_UserDemande2.splice(i, 1);
      $scope.incDemande2--;
    }
    i++;
  }
}

$scope.CleanTabGameSession = function(){
  $scope.liste_UserDemande2=[];
  $scope.incDemande2 = 0;
}
// ------------------------------------------------------------- Fonction Creation/Edition

$scope.CreatGameSession = function(){

  if ( $scope.nameGameCreat )
  {
    $http.post(basePath + 'api/games', { "name":$scope.nameGameCreat, "description":$scope.storyGameCreat })
          .success(function(data){
            console.log(data);
            window.location.reload();
          })
          .error(function(data){
            console.log('Unable to create GameSession ...');
          })
  }
}


$scope.DeletGameSession = function(idgame){

$http.delete(basePath + 'api/games/'+ idgame, {})
      .success(function(data){
        console.log(data);
        window.location.reload();
      })
      .error(function(data){
        console.log('Unable to delete GameSession ...');
      })
}

$scope.EditGameSession = function(idgame){
   $scope.inc = 0;
  if ( $scope.nameGameEdit )
  {
   $http.put(basePath + 'api/updates/'+ idgame +'/games', {"name":$scope.nameGameEdit, "description":$scope.storyGameEdit})
         .success(function(data){
           console.log(data);
           if ( $scope.liste_UserDemande2[0] != null )
           {
             for ( guest in  $scope.liste_UserDemande2)
             {
               console.log($scope.liste_UserDemande2[guest].username);
               $http.post(basePath + 'api/guests/'+ idgame, {"username":$scope.liste_UserDemande2[guest].username})
                     .success(function(data){
                       console.log(data);
                       $scope.inc++;
                     })
                     .error(function(data){
                       console.log('Unable to invite in GameSession ...');
                     })
             }
           }
           window.location.reload();
         })
         .error(function(data){
           console.log('Unable update GameSession ...');
         })
  }
}

$scope.DeletPlayer = function(idgame){

$http.delete(basePath + 'api/invitations/'+ idgame, {})
      .success(function(data){
        console.log(data);
        window.location.reload();
      })
      .error(function(data){
        console.log('Unable to delete Player ...');
      })
}


$scope.clickNextInput = function(event) {
   var Uploader = $('#' + event.target.getAttribute('id')).next();
   Uploader.click();
 }

$scope.createCharacter = function() {
   var xmlhttp = new XMLHttpRequest();
   var formdata = new FormData(document.getElementById('gameUploadSheet'));
   xmlhttp.open("POST", basePath + 'api/sheets', false);
   xmlhttp.setRequestHeader("Authorization", AuthService.getToken());
   xmlhttp.onload = function() { console.log('Upload successfull !!!');}
   xmlhttp.send(formdata);
   if (xmlhttp.status == 200)
    window.location.reload();
 }

$scope.joinGameSession = function(idGame, idInvite) {

var charid = $('input[name=optionsRadios]:checked', '#col_hideChar').val()

$http.post(basePath + 'api/games/'+ idGame +'/validations/'+ idInvite, { "CharacterSheet": charid })
        .success(function(data){
          window.location.reload();
        })
        .error(function(data){
          console.log('Unable to join GameSession ...');
        })
}

$scope.joinGameSession = function(idGame, idInvite) {

 var charid = $('input[name=optionsRadios]:checked', '#col_hideChar').val()

 $http.post(basePath + 'api/games/'+ idGame +'/validations/'+ idInvite, { "CharacterSheet": charid })
         .success(function(data){
           window.location.reload();
         })
         .error(function(data){
           console.log('Unable to denied invitation ...');
         })
 }





// ------------------------------------------------------------- EFFET JS

$scope.collapsfunc = function(nb, key){
  $(".modal-body").toggle(500);
  $scope.coll_hide = nb;
  key = key.toString();

  var creatClass = document.getElementsByClassName('creatCharhide');
  var editClass = document.getElementsByClassName('editCharhide'+key);

  if($scope.coll_hide == 1)
  {
    $(".CreatCharAction").html("Create New Character");
    for (var i = 0 ; i<creatClass.length ; i++)
        creatClass[i].className= "creatCharhide show";
  }
  if ($scope.coll_hide == 0)
  {
    $(".CreatCharAction").html("+ Create Character");
    for (var i = 0 ; i<creatClass.length ; i++)
        creatClass[i].className= "creatCharhide hide";
    for (var i = 0 ; i<editClass.length ; i++)
        editClass[i].className= "editCharhide"+key+" hide";
  }
  if($scope.coll_hide == 2)
  {
    $(".CreatCharAction").html("Edit your Character");
    for (var i = 0 ; i<editClass.length ; i++)
        editClass[i].className= "editCharhide"+key+" show";
  }
}


$scope.creatGameSessionDiv = function(nb){
  $(".SelectGameBoard").toggle(500);
  var gameCreatDiv = document.getElementById('creatGameBoard');
  if (nb == 1)
    gameCreatDiv.className = "show";
  if (nb == 2)
    gameCreatDiv.className = "hide";
}


});
