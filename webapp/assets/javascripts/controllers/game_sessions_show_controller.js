App.controller('gameSessionsShowCtrl', function ($scope, $http, $window, $location, $routeParams){

    $scope.gameUser = [];

    $http.get( basePath + 'api/me', {})
    .success(function(data){
      $scope.user = data.user;
      // console.log($scope.user);

    $http.get( basePath + 'api/games/' + $scope.user.id, {})
    .success(function(game){
      $scope.gamesMaster = game.listGameSessionMaster;
      $scope.gamesJoin = game.listGameSessionPlayer;
      $scope.getUserGame();
      $scope.VerifGameSelect();

      if ( $scope.verification == true)
      {
        $http.get( basePath + 'api/game/' + $routeParams.id, {})
        .success(function(data){

          $scope.currentGame = data.GameSession;
          $scope.setUserAvatar();

          $http.get( basePath + 'api/messages/'+ $scope.currentGame.channels[0].id, {})
          .success(function(answer){
            $scope.messages = answer.messages;
            $scope.channelNewMessage = '';
          })
        })
      }
      else
        document.location.href="/#/games";
    })
  });


  $scope.sendMessage = function() {
    $http.post( basePath + 'api/messages/'+ $scope.currentGame.channels[0].id, {"contents":$scope.channelNewMessage})
    .success(function(data){
      $http.get( basePath + 'api/messages/'+ data.data.id, {})
      .success(function(answer){
        $scope.messages = answer.messages;
        $scope.channelNewMessage = '';
      })
    })
  }

$scope.getUserGame = function(){
  var i = 0;
  for(game in $scope.gamesMaster)
  {
    $scope.gameUser[i] = $scope.gamesMaster[game];
    i++;
  }
  for(game2 in $scope.gamesJoin)
  {
    $scope.gameUser[i] = $scope.gamesJoin[game2];
    i++;
  }
}

$scope.VerifGameSelect = function(){
  var verifGame = 0;
  for(game in $scope.gameUser)
  {
    if ($scope.gameUser[game].id == $routeParams.id)
      verifGame++;
  }
  if (verifGame != 0 )
    $scope.verification = true;
  else
    $scope.verification = false;
}

$scope.setUserAvatar = function(){
  var check = 0;

  for ( userMe in $scope.currentGame.players )
  {
    if ( $scope.currentGame.players[userMe].user.id ==  $scope.user.id )
    {
      $scope.myCharName = $scope.currentGame.players[userMe].character_sheet.full_name;
      $scope.myCharAvatar = $scope.currentGame.players[userMe].character_sheet.image_name;
      $scope.myCharid = $scope.currentGame.players[userMe].character_sheet.id;
      check++;
    }
  }
  if ( check == 0 )
  {
    $scope.myChar = $scope.currentGame.master;
    $scope.myCharName = $scope.currentGame.master.username;
    $scope.myCharAvatar = $scope.currentGame.master.image_profile;
    $scope.myCharid = $scope.currentGame.master.id;
  }
}

$scope.quitGameSession = function(idGame, idUser){

  for ( play in $scope.currentGame.players)
  {
    if ( idUser == $scope.currentGame.players[play].user.id )
      $scope.idPlayer = $scope.currentGame.players[play].id;
  }

  $http.delete(basePath + 'api/games/'+ idGame +'/players/'+ $scope.idPlayer, {})
        .success(function(data){
          console.log(data);
          document.location.href="/#/games";
        })
        .error(function(data){
          console.log('Unable to QUIT Game Session ...');
        })
}


});
