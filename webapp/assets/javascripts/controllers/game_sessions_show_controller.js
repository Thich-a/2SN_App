App.controller('gameSessionsShowCtrl', function ($scope, $http, $window, $location, $routeParams){

    $scope.gameUser = [];

    $http.get( basePath + 'api/user/me', {})
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
        $http.get( basePath + 'api/details/' + $routeParams.id + '/games', {})
        .success(function(data){
          $scope.currentGame = data.GameSession;
          $scope.setUserAvatar();
          // console.log($scope.myChar);
        })
      }
      else
        document.location.href="/#/games";
    })
  });

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
      check++;
    }
  }
  if ( check == 0 )
  {
    $scope.myChar = $scope.currentGame.master;
    $scope.myCharName = $scope.currentGame.master.username;
    $scope.myCharAvatar = $scope.currentGame.master.image_profile;
  }
}



});
