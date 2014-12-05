App.controller('gameSessionsCtrl', function ($scope, $http, $window, $location){

  $scope.Game_Join = [];
  $scope.Game_Creat = [];
  $scope.Liste_player_Game = [];
  $scope.currentGameSel = [];
  $scope.liste_Char_Join = [];

  $scope.sessions = [{
                        'id' : 1,
                        'name' : 'Arkhlay Manor adventures',
                        'story' : 'Le Manoir Arklay est le manoir du premier Resident Evil. Il est le principal lieu où les héros vont passer leur temps. On peut l\'apercevoir dans la fin de Resident Evil 0.',
                        'created_at' : '12 June 1998',
                        'last_log' :   'A zombie opened the door !',
                        'new_logs' : true,
                        'my_creat' : true,
                        'creator' : {
                                  'id' :       1,
                                  'username' : 'Yinfei',
                                  'avatar' :   '/web/uploads/yinfei.png'
                                  },
                        'sheet':{
                                    'id' : 1,
                                    'char_name' : 'Jill Valentine',
                                    'details'   : 'Level 7 Scout',
                                    'story'     : 'Jill Valentine, de l\'équipe Alpha, faisait partie de ceux partis à la recherche de l\'équipe Bravo, qui ne donnait pas signe de vie. Descendue à terre pour examiner l\'hélicoptère abandonné de l\'équipe Bravo, elle assiste à la mort de son coéquipier Joseph Frost et se réfugie avec ses compagnons dans le manoir Spencer.',
                                    'avatar'    : '/web/uploads/jill.jpg'
                                },
                        'user':[{
                                'id' :       1,
                                'username' : 'Yinfei',
                                'avatar' :   '/web/uploads/yinfei.png',
                                'charaters':{
                                            'id' : 1,
                                            'char_name' : 'Jill Valentine',
                                            'details'   : 'Level 7 Scout',
                                            'story'     : 'Jill Valentine, de l\'équipe Alpha, faisait partie de ceux partis à la recherche de l\'équipe Bravo, qui ne donnait pas signe de vie. Descendue à terre pour examiner l\'hélicoptère abandonné de l\'équipe Bravo, elle assiste à la mort de son coéquipier Joseph Frost et se réfugie avec ses compagnons dans le manoir Spencer.',
                                            'avatar'    : '/web/uploads/jill.jpg',
                                            'master'    : true
                                            },
                                },
                                {
                                'id' :       2,
                                'username' : 'Toinou',
                                'avatar' :   '/web/uploads/chopper.jpg',
                                'charaters':{
                                            'id' : 198,
                                            'char_name' : 'Jin',
                                            'details'   : 'Level 5 Scout',
                                            'story'     : 'Jin Kazama est le fils de Jun Kazama et Kazuya Mishima. Dans Tekken 5, il est révélé que Jin a une cousine, Asuka Kazama. Toutefois, ils ne semblent pas être au courant de leur relation. Sa mère lui avoue sa véritable identité dans Tekken 3 lorsqu\'elle sent l\'approche du danger qui lui coûtera la vie, à savoir l\'arrivée du Dieu du combat, l\'Ogre.Toutes ses actions et évènements de sa vie prouvent qu\'il est la quintessence du héros tragique : disparition très tôt et brutale de sa mère, trahison de son grand-père en qui il avait placé sa confiance et ses espoirs; héritage du devil gene... enfin, le retour de son arrière-grand-père, Jinpachi Mishima, qui l\'a empêché de perdre son combat avec le Diable intérieur. Tous les grands événements traumatiques qui se produisent dans la vie du héros sont totalement hors de son contrôle.',
                                            'avatar'    : '/web/uploads/jin.jpg',
                                            'master'    : false
                                            },
                                },
                                {
                                'id' :       3,
                                'username' : 'Beck Beck',
                                'avatar' :   '/web/uploads/beck.jpg',
                                'charaters':{
                                            'id' : 139,
                                            'char_name' : 'Kitty-Fury',
                                            'details'   : 'Level 5 Scout',
                                            'story'     : 'Selon le profil officiel de Hello Kitty, cette dernière se nomme Kitty White (キティ・ホワイト, Kiti Howaito?), et elle est née à Londres, en Angleterre, un 1er novembre. Elle pèse l\'équivalent du poids de cinq pommes. ',
                                            'avatar'    : '/web/uploads/hellokitty.jpg',
                                            'master'    : false
                                            },
                                }]
                       },{
                          'id' : 2,
                          'name' : 'Operation Snake Eater',
                          'story' : 'Operation Snake Eater was a CIA operation conducted in Tselinoyarsk, USSR, in August and September 1964. Its official aims were to assassinate the founding member of the Cobra Unit, The Boss, and to eliminate the threat posed by the nuclear-armed Shagohod weapon.',
                          'created_at' : '6 August 1956',
                          'last_log' :   'Critical hit ! Shagohod explodes !',
                          'new_logs' : false,
                          'my_creat' : false,
                          'creator' : {
                                  'id' :       2,
                                  'username' : 'Toinou',
                                  'avatar' :   '/web/uploads/chopper.jpg'
                                  },
                          'sheet':{
                                      'id' : 2,
                                      'char_name' : 'Big Boss',
                                      'details'   : 'Level 18 Infiltrator',
                                      'story'     : 'Le Vrai hero de Guerre. Big Boss !!! Il ne rate jamais sont tire...',
                                      'avatar'    : '/web/uploads/bb.png'
                                  },
                          'user':[{
                                  'id' :       1,
                                  'username' : 'Yinfei',
                                  'avatar' :   '/web/uploads/yinfei.png',
                                  'charaters':{
                                              'id' : 2,
                                              'char_name' : 'Big Boss',
                                              'details'   : 'Level 18 Infiltrator',
                                              'story'     : 'Le Vrai hero de Guerre. Big Boss !!! Il ne rate jamais sont tire...',
                                              'avatar'    : '/web/uploads/bb.png',
                                              'master'    : false
                                              },
                                  },
                                  {
                                  'id' :       2,
                                  'username' : 'Toinou',
                                  'avatar' :   '/web/uploads/chopper.jpg',
                                  'charaters':{
                                              'id' : 132,
                                              'char_name' : 'Jon',
                                              'details'   : 'Level 5 Scout',
                                              'story'     : 'Jon Kazama est le fils de Jun Kazama et Kazuya Mishima. Dans Tekken 5, il est révélé que Jin a une cousine, Asuka Kazama. Toutefois, ils ne semblent pas être au courant de leur relation. Sa mère lui avoue sa véritable identité dans Tekken 3 lorsqu\'elle sent l\'approche du danger qui lui coûtera la vie, à savoir l\'arrivée du Dieu du combat, l\'Ogre.Toutes ses actions et évènements de sa vie prouvent qu\'il est la quintessence du héros tragique : disparition très tôt et brutale de sa mère, trahison de son grand-père en qui il avait placé sa confiance et ses espoirs; héritage du devil gene... enfin, le retour de son arrière-grand-père, Jinpachi Mishima, qui l\'a empêché de perdre son combat avec le Diable intérieur. Tous les grands événements traumatiques qui se produisent dans la vie du héros sont totalement hors de son contrôle.',
                                              'avatar'    : '/web/uploads/jin.jpg',
                                              'master'    : true
                                              },
                                  },
                                  {
                                  'id' :       3,
                                  'username' : 'Beck Beck',
                                  'avatar' :   '/web/uploads/beck.jpg',
                                  'charaters':{
                                              'id' : 122,
                                              'char_name' : 'Chat-Fury',
                                              'details'   : 'Level 5 Scout',
                                              'story'     : 'Selon le profil officiel de Hello Kitty, cette dernière se nomme Kitty White (キティ・ホワイト, Kiti Howaito?), et elle est née à Londres, en Angleterre, un 1er novembre. Elle pèse l\'équivalent du poids de cinq pommes. ',
                                              'avatar'    : '/web/uploads/hellokitty.jpg',
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
                              'my_creat' : false,
                              'creator' : {
                                        'id' :       3,
                                        'username' : 'Beck Beck',
                                        'avatar' :   '/web/uploads/beck.jpg'
                                        },
                              'sheet':{
                                          'id' : 33,
                                          'char_name' : 'Super Mario',
                                          'details'   : 'Level 20 Plumber',
                                          'story'     : 'Mr Video est le premier nom donné par Shigeru Miyamoto à Mario3. Selon le jeune développeur, ce personnage destiné à apparaître dans tous les jeux qu\'il réaliserait se devait de posséder une stature propre, contrairement aux autres jeux de cette époque (PacMan, Space Invaders). ',
                                          'avatar'    : '/web/uploads/mario.gif'
                                      },
                              'user':[{
                                      'id' :       1,
                                      'username' : 'Yinfei',
                                      'avatar' :   '/web/uploads/yinfei.png',
                                      'charaters':{
                                                  'id' : 33,
                                                  'char_name' : 'Super Mario',
                                                  'details'   : 'Level 20 Plumber',
                                                  'story'     : 'Mr Video est le premier nom donné par Shigeru Miyamoto à Mario3. Selon le jeune développeur, ce personnage destiné à apparaître dans tous les jeux qu\'il réaliserait se devait de posséder une stature propre, contrairement aux autres jeux de cette époque (PacMan, Space Invaders). ',
                                                  'avatar'    : '/web/uploads/mario.gif',
                                                  'master'    : false
                                                  },
                                      },
                                      {
                                      'id' :       2,
                                      'username' : 'Toinou',
                                      'avatar' :   '/web/uploads/chopper.jpg',
                                      'charaters':{
                                                  'id' : 12,
                                                  'char_name' : 'Lee',
                                                  'details'   : 'Level 5 Scout',
                                                  'story'     : 'Lee Kazama est le fils de Jun Kazama et Kazuya Mishima. Dans Tekken 5, il est révélé que lee a une cousine, Asuka Kazama. Toutefois, ils ne ................................son grand-père en qui il avait placé sa confiance et ses espoirs; héritage du devil gene... enfin, le retour de son arrière-grand-père, Jinpachi Mishima, qui l\'a empêché de perdre son combat avec le Diable intérieur. Tous les grands événements traumatiques qui se produisent dans la vie du héros sont totalement hors de son contrôle.',
                                                  'avatar'    : '/web/uploads/jin.jpg',
                                                  'master'    : false
                                                  },
                                      },
                                      {
                                      'id' :       221,
                                      'username' : 'Boby',
                                      'avatar' :   '/web/uploads/chopper.jpg',
                                      'charaters':{
                                                  'id' : 127,
                                                  'char_name' : 'SANGOKU',
                                                  'details'   : 'Level 5 Scout',
                                                  'story'     : 'Lee Kazama est le fils de Jun Kazama et Kazuya Mishima. Dans Tekken 5, il est révélé que lee a une cousine, Asuka Kazama. Toutefois, ils ne ................................son grand-père en qui il avait placé sa confiance et ses espoirs; héritage du devil gene... enfin, le retour de son arrière-grand-père, Jinpachi Mishima, qui l\'a empêché de perdre son combat avec le Diable intérieur. Tous les grands événements traumatiques qui se produisent dans la vie du héros sont totalement hors de son contrôle.',
                                                  'avatar'    : '/web/uploads/jin.jpg',
                                                  'master'    : false
                                                  },
                                      },
                                      {
                                      'id' :       3,
                                      'username' : 'Beck Beck',
                                      'avatar' :   '/web/uploads/beck.jpg',
                                      'charaters':{
                                                  'id' : 18,
                                                  'char_name' : 'CAT',
                                                  'details'   : 'Level 5 Scout',
                                                  'story'     : 'Selon le profil officiel de Hello CAT, cette dernière se nomme Kitty White (キティ・ホワイト, Kiti Howaito?), et elle est née à Londres, en Angleterre, un 1er novembre. Elle pèse l\'équivalent du poids de cinq pommes. ',
                                                  'avatar'    : '/web/uploads/hellokitty.jpg',
                                                  'master'    : true
                                                  }
                                      }]

                     }]

 $scope.invitations = [{
                        'id' : 23,
                        'game_name' : "Super Smash Peigne",
                        'story' : 'Super Smash Peigne. for Nintendo 3DS / for Wii U sont deux jeux vidéo de combat développés par Sora Ltd. et Namco Bandai Games et édités par Nintendo. Ils officient en tant que quatrième et cinquième épisode de la série Super Smash Peigne.',
                        'creator' : {
                                'id' : 3,
                                'username' : 'Beck Beck',
                                'avatar' : '/web/uploads/beck.jpg'
                                  }
                      },{
                        'id' : 24,
                        'game_name' : "Takeshi Castle",
                        'story' : 'Takeshi\'s Castle était un jeu télévisé japonais diffusé de 1986 à 1989 sur la chaîne télévisée Tokyo Broadcasting System créé par le réalisateur et acteur Takeshi Kitano.',
                        'creator' : {
                                'id' : 3,
                                'username' : 'Beck Beck',
                                'avatar' : '/web/uploads/beck.jpg'
                                  }
                      },{
                        'id' : 40,
                        'game_name' : "Windjammers",
                        'story' : 'Windjammers est un jeu vidéo d\'arcade développé par Data East et édité par SNK en 1994 sur borne d\'arcade Neo-Geo MVS, sur console Neo-Geo AES et puis sur Neo-Geo CD en 1995.',
                        'creator' : {
                                'id' : 2,
                                'username' : 'Toinou',
                                'avatar' :   '/web/uploads/chopper.jpg'
                                  }
                      }]

$scope.myCharacteres = [{
                        'id' : 33,
                        'char_name' : 'Super Mario',
                        'details'   : 'Level 20 Plumber',
                        'story'     : 'Mr Video est le premier nom donné par Shigeru Miyamoto à Mario3. Selon le jeune développeur, ce personnage destiné à apparaître dans tous les jeux qu\'il réaliserait se devait de posséder une stature propre, contrairement aux autres jeux de cette époque (PacMan, Space Invaders). ',
                        'avatar'    : '/web/uploads/mario.gif',
                        'master'    : false,
                        'inGame'    : true
                      },{
                        'id' : 1,
                        'char_name' : 'Jill Valentine',
                        'details'   : 'Level 7 Scout',
                        'story'     : 'Jill Valentine, de l\'équipe Alpha, faisait partie de ceux partis à la recherche de l\'équipe Bravo, qui ne donnait pas signe de vie. Descendue à terre pour examiner l\'hélicoptère abandonné de l\'équipe Bravo, elle assiste à la mort de son coéquipier Joseph Frost et se réfugie avec ses compagnons dans le manoir Spencer.',
                        'avatar'    : '/web/uploads/jill.jpg',
                        'master'    : true,
                        'inGame'    : true
                      },{
                        'id' : 2,
                        'char_name' : 'Big Boss',
                        'details'   : 'Level 18 Infiltrator',
                        'story'     : 'Le Vrai hero de Guerre. Big Boss !!! Il ne rate jamais sont tire...',
                        'avatar'    : '/web/uploads/bb.png',
                        'master'    : false,
                        'inGame'    : true
                      },{
                        'id' : 68,
                        'char_name' : 'Golum',
                        'details'   : 'Level 3 Infiltrator',
                        'story'     : 'Gollum est un personnage fictif du légendaire créé par l\’écrivain britannique J. R. R. Tolkien et qui apparaît dans ses romans Le Hobbit et Le Seigneur des anneaux. Connu en tant que Sméagol à l\'origine, Gollum est un Hobbit de la branche des Forts, qui vivait aux Champs aux Iris vers 2440 T. A.. En 2463 T. A., il s\'empare de l\'Anneau unique après avoir tué son cousin qui vient de découvrir l\'anneau dans le lit de l\'Anduin. Chassé par sa famille, il se réfugie dans une caverne des Monts Brumeux et prend le nom « Gollum » à cause de bruits de déglutition qu\'il fait avec sa gorge. Grâce à l\'Anneau unique, sa vie se voit allongée de plusieurs siècles mais il est obsédé par celui-ci au point d\'en devenir l\'esclave.',
                        'avatar'    : '/web/uploads/gollum.jpg',
                        'master'    : false,
                        'inGame'    : false
                      },{
                        'id' : 45,
                        'char_name' : 'Minion',
                        'details'   : 'Level 100 Kawai',
                        'story'     : 'A l\'origine de simples organismes monocellulaires de couleur jaune, les Minions ont évolué au cours des âges au service de maîtres plus abjectes les une que les autres. Les disparitions répétitives de ceux-ci, des tyrannosaures à Napoléon, ont plongé les Minions dans une profonde dépression. Mais l\'un d\'eux, prénommé Kevin, a une idée. Flanqué de Stuart, l\'adolescent rebelle et de l\'adorable petit Bob, Kevin part à la recherche d\'un nouveau patron malfaisant pour guider les siens. ',
                        'avatar'    : '/web/uploads/minion.jpg',
                        'master'    : false,
                        'inGame'    : false
                      }]


$scope.selectCreatGame = function(){
  var i = 0;
  var j = 0;
  for(session in $scope.sessions)
  {
    if ($scope.sessions[session].my_creat == true)
    {
      $scope.Game_Creat[i] = $scope.sessions[session];
      i++;
    }
    else
    {
      $scope.Game_Join[j] = $scope.sessions[session];
      j++;
    }
  }
}
$scope.selectCreatGame();

$scope.countPlayerGame = function(GameId){
  var i = 0;
  $scope.nb_player = 0;
  for (session in $scope.sessions){
    if ($scope.sessions[session].id == GameId)
    {
      $scope.currentGameSel = $scope.sessions[session];
    }
  }
  for (game in $scope.currentGameSel.user){
    i++;
  }
  if (i > 0)
    $scope.nb_player = i;
}

$scope.selectCharJoin = function(){
  var i = 0;
  for(charJoin in $scope.myCharacteres)
  {
    if ($scope.myCharacteres[charJoin].inGame == false)
    {
      $scope.liste_Char_Join[i] = $scope.myCharacteres[charJoin];
      i++;
    }
  }
}
$scope.selectCharJoin();

});
