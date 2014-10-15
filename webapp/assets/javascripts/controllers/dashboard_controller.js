App.controller('dashboardCtrl', function ($scope, $http, $window, $location){
  $scope.user = {
                  'id' :       1,
                  'username' : 'Yinfei',
                  'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png'
                }
  $scope.sheets = [{
                      'id' : 1,
                      'char_name' : 'Jill Valentine',
                      'details'   : 'Level 7 Scout',
                      'avatar'    : 'webapp/assets/img/fixtures-pictures/jill.jpg',
                      'game_session' : {
                                       'id' : 1,
                                       'name' : 'Arkhlay Manor adventures'
                                     }
                  },{
                      'id' : 2,
                      'char_name' : 'Big Boss',
                      'details'   : 'Level 18 Infiltrator',
                      'avatar'    : 'webapp/assets/img/fixtures-pictures/bb.png',
                      'game_session' : {
                                       'id' : 2,
                                       'name' : 'Operation Snake Eater'
                                     }
                  },{
                      'id' : 3,
                      'char_name' : 'Super Mario',
                      'details'   : 'Level 20 Plumber',
                      'avatar'    : 'webapp/assets/img/fixtures-pictures/mario.gif',
                      'game_session' : {
                                       'id' : 3,
                                       'name' : 'Mushroom Kingdom'
                                     }
                  }]

  $scope.sessions = [{
                        'id' : 1,
                        'name' : 'Arkhlay Manor adventures',
                        'created_at' : '12 June 1998',
                        'last_log' :   'A zombie opened the door !',
                        'new_logs' :   true
                     },{
                        'id' : 2,
                        'name' : 'Operation Snake Eater',
                        'created_at' : '6 August 1956',
                        'last_log' :   'Critical hit ! Shagohod explodes !',
                        'new_logs' :   false
                     },{
                        'id' : 3,
                        'name' : 'Mushroom Kingdom',
                        'created_at' : '2 Febuary 1983',
                        'last_log' : 'IT\'S A-ME MARIOOOOO !',
                        'new_logs' :   true
                     }]

  $scope.albums = [
                    {
                      'id': 1,
                      'title' : 'my album',
                      'pictures' :
                        [{
                          'id' : 1,
                          'url' : 'webapp/assets/img/galleries/AmericaBoy.png'
                          },{
                            'id' : 2,
                            'url' : 'webapp/assets/img/galleries/avatar.png'
                          },{
                            'id' : 3,
                            'url' : 'webapp/assets/img/galleries/avengers2SN.png'
                          },{
                            'id' : 4,
                            'url' : 'webapp/assets/img/galleries/cookieMonster.png'
                          },{
                            'id' : 5,
                            'url' : 'webapp/assets/img/galleries/hipsterMax.png'
                          },{
                          'id' : 6,
                          'url' : 'webapp/assets/img/galleries/ninjaTurtles.png'
                        }]
                    },{
                      'id': 2,
                      'title': 'my other album',
                      'pictures' :
                        [{
                          'id' : 7,
                          'url' : 'webapp/assets/img/galleries/rubyMan.png'
                        },{
                          'id' : 8,
                          'url' : 'webapp/assets/img/galleries/titanic3D.png'
                        },{
                          'id' : 9,
                          'url' : 'webapp/assets/img/galleries/zionLion.png'
                        }]
                  }]
});
