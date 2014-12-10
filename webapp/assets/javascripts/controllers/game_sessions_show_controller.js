App.controller('gameSessionsShowCtrl', function ($scope, $http, $window, $location, $routeParams){

  $scope.currentGame;
  $scope.listGameSessions = [];
  $scope.playerOther = [];

  $scope.sessions = [{
                        'id' : 1,
                        'name' : 'Arkhlay Manor adventures',
                        'story' : 'Le Manoir Arklay est le manoir du premier Resident Evil. Il est le principal lieu où les héros vont passer leur temps. On peut l\'apercevoir dans la fin de Resident Evil 0.',
                        'created_at' : '12 June 1998',
                        'last_log' :   'A zombie opened the door !',
                        'new_logs' :   true,
                        'sheet':{
                                    'id' : 1,
                                    'char_name' : 'Jill Valentine',
                                    'details'   : 'Level 7 Scout',
                                    'story'     : 'Jill Valentine, de l\'équipe Alpha, faisait partie de ceux partis à la recherche de l\'équipe Bravo, qui ne donnait pas signe de vie. Descendue à terre pour examiner l\'hélicoptère abandonné de l\'équipe Bravo, elle assiste à la mort de son coéquipier Joseph Frost et se réfugie avec ses compagnons dans le manoir Spencer.',
                                    'avatar'    : '/web/uploads/photo/jill.jpg'
                                },
                        'user':[{
                                'id' :       1,
                                'username' : 'Yinfei',
                                'avatar' :   '/web/uploads/photo/yinfei.png',
                                'charaters':{
                                            'id' : 1,
                                            'char_name' : 'Jill Valentine',
                                            'details'   : 'Level 7 Scout',
                                            'story'     : 'Jill Valentine, de l\'équipe Alpha, faisait partie de ceux partis à la recherche de l\'équipe Bravo, qui ne donnait pas signe de vie. Descendue à terre pour examiner l\'hélicoptère abandonné de l\'équipe Bravo, elle assiste à la mort de son coéquipier Joseph Frost et se réfugie avec ses compagnons dans le manoir Spencer.',
                                            'avatar'    : '/web/uploads/photo/jill.jpg',
                                            'master'    : true
                                            },
                                },
                                {
                                'id' :       2,
                                'username' : 'Toinou',
                                'avatar' :   '/web/uploads/photo/chopper.jpg',
                                'charaters':{
                                            'id' : 198,
                                            'char_name' : 'Jin',
                                            'details'   : 'Level 5 Scout',
                                            'story'     : 'Jin Kazama est le fils de Jun Kazama et Kazuya Mishima. Dans Tekken 5, il est révélé que Jin a une cousine, Asuka Kazama. Toutefois, ils ne semblent pas être au courant de leur relation. Sa mère lui avoue sa véritable identité dans Tekken 3 lorsqu\'elle sent l\'approche du danger qui lui coûtera la vie, à savoir l\'arrivée du Dieu du combat, l\'Ogre.Toutes ses actions et évènements de sa vie prouvent qu\'il est la quintessence du héros tragique : disparition très tôt et brutale de sa mère, trahison de son grand-père en qui il avait placé sa confiance et ses espoirs; héritage du devil gene... enfin, le retour de son arrière-grand-père, Jinpachi Mishima, qui l\'a empêché de perdre son combat avec le Diable intérieur. Tous les grands événements traumatiques qui se produisent dans la vie du héros sont totalement hors de son contrôle.',
                                            'avatar'    : '/web/uploads/photo/jin.jpg',
                                            'master'    : false
                                            },
                                },
                                {
                                'id' :       3,
                                'username' : 'Beck Beck',
                                'avatar' :   '/web/uploads/photo/beck.jpg',
                                'charaters':{
                                            'id' : 139,
                                            'char_name' : 'Kitty-Fury',
                                            'details'   : 'Level 5 Scout',
                                            'story'     : 'Selon le profil officiel de Hello Kitty, cette dernière se nomme Kitty White (キティ・ホワイト, Kiti Howaito?), et elle est née à Londres, en Angleterre, un 1er novembre. Elle pèse l\'équivalent du poids de cinq pommes. ',
                                            'avatar'    : '/web/uploads/photo/hellokitty.jpg',
                                            'master'    : false
                                            },
                                }]
                       },{
                          'id' : 2,
                          'name' : 'Operation Snake Eater',
                          'story' : 'Operation Snake Eater was a CIA operation conducted in Tselinoyarsk, USSR, in August and September 1964. Its official aims were to assassinate the founding member of the Cobra Unit, The Boss, and to eliminate the threat posed by the nuclear-armed Shagohod weapon.',
                          'created_at' : '6 August 1956',
                          'last_log' :   'Critical hit ! Shagohod explodes !',
                          'new_logs' :   false,
                          'sheet':{
                                      'id' : 2,
                                      'char_name' : 'Big Boss',
                                      'details'   : 'Level 18 Infiltrator',
                                      'story'     : 'Le Vrai hero de Guerre. Big Boss !!! Il ne rate jamais sont tire...',
                                      'avatar'    : '/web/uploads/photo/bb.png'
                                  },
                          'user':[{
                                  'id' :       1,
                                  'username' : 'Yinfei',
                                  'avatar' :   '/web/uploads/photo/yinfei.png',
                                  'charaters':{
                                              'id' : 2,
                                              'char_name' : 'Big Boss',
                                              'details'   : 'Level 18 Infiltrator',
                                              'story'     : 'Le Vrai hero de Guerre. Big Boss !!! Il ne rate jamais sont tire...',
                                              'avatar'    : '/web/uploads/photo/bb.png',
                                              'master'    : false
                                              },
                                  },
                                  {
                                  'id' :       2,
                                  'username' : 'Toinou',
                                  'avatar' :   '/web/uploads/photo/chopper.jpg',
                                  'charaters':{
                                              'id' : 132,
                                              'char_name' : 'Jon',
                                              'details'   : 'Level 5 Scout',
                                              'story'     : 'Jon Kazama est le fils de Jun Kazama et Kazuya Mishima. Dans Tekken 5, il est révélé que Jin a une cousine, Asuka Kazama. Toutefois, ils ne semblent pas être au courant de leur relation. Sa mère lui avoue sa véritable identité dans Tekken 3 lorsqu\'elle sent l\'approche du danger qui lui coûtera la vie, à savoir l\'arrivée du Dieu du combat, l\'Ogre.Toutes ses actions et évènements de sa vie prouvent qu\'il est la quintessence du héros tragique : disparition très tôt et brutale de sa mère, trahison de son grand-père en qui il avait placé sa confiance et ses espoirs; héritage du devil gene... enfin, le retour de son arrière-grand-père, Jinpachi Mishima, qui l\'a empêché de perdre son combat avec le Diable intérieur. Tous les grands événements traumatiques qui se produisent dans la vie du héros sont totalement hors de son contrôle.',
                                              'avatar'    : '/web/uploads/photo/jin.jpg',
                                              'master'    : true
                                              },
                                  },
                                  {
                                  'id' :       3,
                                  'username' : 'Beck Beck',
                                  'avatar' :   '/web/uploads/photo/beck.jpg',
                                  'charaters':{
                                              'id' : 122,
                                              'char_name' : 'Chat-Fury',
                                              'details'   : 'Level 5 Scout',
                                              'story'     : 'Selon le profil officiel de Hello Kitty, cette dernière se nomme Kitty White (キティ・ホワイト, Kiti Howaito?), et elle est née à Londres, en Angleterre, un 1er novembre. Elle pèse l\'équivalent du poids de cinq pommes. ',
                                              'avatar'    : '/web/uploads/photo/hellokitty.jpg',
                                              'master'    : false
                                              },
                                  }],
                               },{
                              'id' : 3,
                              'name' : 'Mushroom Kingdom',
                              'story' : 'Le Royaume Champignon est un lieu imaginaire créé par Shigeru Miyamoto, contrée dans laquelle vivent Mario et ses amis. C\'est dans le Royaume Champignon que se déroulent la quasi-totalité des aventures de la série.',
                              'created_at' : '2 Febuary 1983',
                              'last_log' : 'IT\'S A-ME MARIOOOOO !',
                              'new_logs' :   true,
                              'sheet':{
                                          'id' : 33,
                                          'char_name' : 'Super Mario',
                                          'details'   : 'Level 20 Plumber',
                                          'story'     : 'Mr Video est le premier nom donné par Shigeru Miyamoto à Mario3. Selon le jeune développeur, ce personnage destiné à apparaître dans tous les jeux qu\'il réaliserait se devait de posséder une stature propre, contrairement aux autres jeux de cette époque (PacMan, Space Invaders). ',
                                          'avatar'    : '/web/uploads/photo/mario.gif'
                                      },
                              'user':[{
                                      'id' :       1,
                                      'username' : 'Yinfei',
                                      'avatar' :   '/web/uploads/photo/yinfei.png',
                                      'charaters':{
                                                  'id' : 33,
                                                  'char_name' : 'Super Mario',
                                                  'details'   : 'Level 20 Plumber',
                                                  'story'     : 'Mr Video est le premier nom donné par Shigeru Miyamoto à Mario3. Selon le jeune développeur, ce personnage destiné à apparaître dans tous les jeux qu\'il réaliserait se devait de posséder une stature propre, contrairement aux autres jeux de cette époque (PacMan, Space Invaders). ',
                                                  'avatar'    : '/web/uploads/photo/mario.gif',
                                                  'master'    : false
                                                  },
                                      },
                                      {
                                      'id' :       2,
                                      'username' : 'Toinou',
                                      'avatar' :   '/web/uploads/photo/chopper.jpg',
                                      'charaters':{
                                                  'id' : 12,
                                                  'char_name' : 'Lee',
                                                  'details'   : 'Level 5 Scout',
                                                  'story'     : 'Lee Kazama est le fils de Jun Kazama et Kazuya Mishima. Dans Tekken 5, il est révélé que lee a une cousine, Asuka Kazama. Toutefois, ils ne ................................son grand-père en qui il avait placé sa confiance et ses espoirs; héritage du devil gene... enfin, le retour de son arrière-grand-père, Jinpachi Mishima, qui l\'a empêché de perdre son combat avec le Diable intérieur. Tous les grands événements traumatiques qui se produisent dans la vie du héros sont totalement hors de son contrôle.',
                                                  'avatar'    : '/web/uploads/photo/jin.jpg',
                                                  'master'    : false
                                                  },
                                      },
                                      {
                                      'id' :       3,
                                      'username' : 'Beck Beck',
                                      'avatar' :   '/web/uploads/photo/beck.jpg',
                                      'charaters':{
                                                  'id' : 18,
                                                  'char_name' : 'CAT',
                                                  'details'   : 'Level 5 Scout',
                                                  'story'     : 'Selon le profil officiel de Hello CAT, cette dernière se nomme Kitty White (キティ・ホワイト, Kiti Howaito?), et elle est née à Londres, en Angleterre, un 1er novembre. Elle pèse l\'équivalent du poids de cinq pommes. ',
                                                  'avatar'    : '/web/uploads/photo/hellokitty.jpg',
                                                  'master'    : true
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
