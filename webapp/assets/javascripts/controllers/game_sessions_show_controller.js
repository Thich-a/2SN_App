App.controller('gameSessionsShowCtrl', function ($scope, $http, $window, $location, $routeParams){

  $scope.currentGame;
  $scope.listGameSessions = [];
  $scope.playerOther = [];

  $scope.user = {
                  'id' :       1,
                  'username' : 'Yinfei',
                  'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png'
                }

  $scope.sessions = [{
                        'id' : 1,
                        'name' : 'Arkhlay Manor adventures',
                        'created_at' : '12 June 1998',
                        'last_log' :   'A zombie opened the door !',
                        'new_logs' :   true,
                        'sheet':{
                                    'id' : 1,
                                    'char_name' : 'Jill Valentine',
                                    'details'   : 'Level 7 Scout',
                                    'avatar'    : 'webapp/assets/img/fixtures-pictures/jill.jpg'
                                },
                        'user':[{
                                'id' :       1,
                                'username' : 'Yinfei',
                                'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png',
                                'charaters':{
                                            'id' : 1,
                                            'char_name' : 'Jill Valentine',
                                            'details'   : 'Level 7 Scout',
                                            'avatar'    : 'webapp/assets/img/fixtures-pictures/jill.jpg',
                                            'master'    : true
                                            },
                                },
                                {
                                'id' :       2,
                                'username' : 'Toinou',
                                'avatar' :   'webapp/assets/img/fixtures-pictures/chopper.jpg',
                                'charaters':{
                                            'id' : 1,
                                            'char_name' : 'Jin',
                                            'details'   : 'Level 5 Scout',
                                            'avatar'    : 'webapp/assets/img/fixtures-pictures/jin.jpg',
                                            'master'    : false
                                            },
                                },
                                {
                                'id' :       3,
                                'username' : 'Lili',
                                'avatar' :   'webapp/assets/img/fixtures-pictures/chopper.jpg',
                                'charaters':{
                                            'id' : 1,
                                            'char_name' : 'Kitty-Fury',
                                            'details'   : 'Level 5 Scout',
                                            'avatar'    : 'webapp/assets/img/fixtures-pictures/hellokitty.jpg',
                                            'master'    : false
                                            },
                                }]
                       },{
                          'id' : 2,
                          'name' : 'Operation Snake Eater',
                          'created_at' : '6 August 1956',
                          'last_log' :   'Critical hit ! Shagohod explodes !',
                          'new_logs' :   false,
                          'sheet':{
                                      'id' : 2,
                                      'char_name' : 'Big Boss',
                                      'details'   : 'Level 18 Infiltrator',
                                      'avatar'    : 'webapp/assets/img/fixtures-pictures/bb.png'
                                  },
                          'user':[{
                                  'id' :       1,
                                  'username' : 'Yinfei',
                                  'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png',
                                  'charaters':{
                                              'id' : 2,
                                              'char_name' : 'Big Boss',
                                              'details'   : 'Level 18 Infiltrator',
                                              'avatar'    : 'webapp/assets/img/fixtures-pictures/bb.png',
                                              'master'    : false
                                              },
                                  },
                                  {
                                  'id' :       2,
                                  'username' : 'Toinou',
                                  'avatar' :   'webapp/assets/img/fixtures-pictures/chopper.jpg',
                                  'charaters':{
                                              'id' : 1,
                                              'char_name' : 'Jin',
                                              'details'   : 'Level 5 Scout',
                                              'avatar'    : 'webapp/assets/img/fixtures-pictures/jin.jpg',
                                              'master'    : true
                                              },
                                  },
                                  {
                                  'id' :       3,
                                  'username' : 'Lili',
                                  'avatar' :   'webapp/assets/img/fixtures-pictures/chopper.jpg',
                                  'charaters':{
                                              'id' : 1,
                                              'char_name' : 'Kitty-Fury',
                                              'details'   : 'Level 5 Scout',
                                              'avatar'    : 'webapp/assets/img/fixtures-pictures/hellokitty.jpg',
                                              'master'    : false
                                              },
                                  }],
                               },{
                              'id' : 3,
                              'name' : 'Mushroom Kingdom',
                              'created_at' : '2 Febuary 1983',
                              'last_log' : 'IT\'S A-ME MARIOOOOO !',
                              'new_logs' :   true,
                              'sheet':{
                                          'id' : 3,
                                          'char_name' : 'Super Mario',
                                          'details'   : 'Level 20 Plumber',
                                          'avatar'    : 'webapp/assets/img/fixtures-pictures/mario.gif'
                                      },
                              'user':[{
                                      'id' :       1,
                                      'username' : 'Yinfei',
                                      'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png',
                                      'charaters':{
                                                  'id' : 3,
                                                  'char_name' : 'Super Mario',
                                                  'details'   : 'Level 20 Plumber',
                                                  'avatar'    : 'webapp/assets/img/fixtures-pictures/mario.gif',
                                                  'master'    : false
                                                  },
                                      },
                                      {
                                      'id' :       2,
                                      'username' : 'Toinou',
                                      'avatar' :   'webapp/assets/img/fixtures-pictures/chopper.jpg',
                                      'charaters':{
                                                  'id' : 1,
                                                  'char_name' : 'Jin',
                                                  'details'   : 'Level 5 Scout',
                                                  'avatar'    : 'webapp/assets/img/fixtures-pictures/jin.jpg',
                                                  'master'    : true
                                                  },
                                      },
                                      {
                                      'id' :       3,
                                      'username' : 'Lili',
                                      'avatar' :   'webapp/assets/img/fixtures-pictures/chopper.jpg',
                                      'charaters':{
                                                  'id' : 1,
                                                  'char_name' : 'Kitty-Fury',
                                                  'details'   : 'Level 5 Scout',
                                                  'avatar'    : 'webapp/assets/img/fixtures-pictures/hellokitty.jpg',
                                                  'master'    : false
                                                  }
                                      }]

                     }]

$scope.selectCurrentGame = function(){
  for(session in $scope.sessions){
    if ($scope.sessions[session].id == $routeParams.id)
    {
      $scope.currentGame = $scope.sessions[session];
    }
  }
}
$scope.selectCurrentGame();

$scope.sheet = $scope.currentGame.sheet;

$scope.listGameSessionSelect = function(){
  var i = 0;
  for(session in $scope.sessions)
  {
    if ($scope.sessions[session].id != $scope.currentGame.id)
    {
      $scope.listGameSessions[i] = $scope.sessions[session];
      i++;
    }
  }
}
$scope.listGameSessionSelect();

$scope.masterGameSelect = function(){
  var i = 0;
  for(game in $scope.currentGame.user)
  {
    if ($scope.currentGame.user[game].charaters.master == true)
    {
      $scope.playerMaster = $scope.currentGame.user[game];
    }
    else
    {
      $scope.playerOther[i] = $scope.currentGame.user[game];
      i++;
    }
  }
}
$scope.masterGameSelect();


});
