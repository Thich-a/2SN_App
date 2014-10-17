App.controller('postsCtrl', function ($scope, $http, $window, $location){

  $scope.user = {
                  'id' :       1,
                  'username' : 'Yinfei',
                  'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png'
                }

  // $scope.userPosts = [
  //                     {'id':1, 'date':'10/10/2014', 'time':'12:03', 'content':'This is my first post'},
  //                     {'id':2, 'date':'11/10/2014', 'time':'07:34', 'content':'AnotherPost'},
  //                     {'id':3, 'date':'11/10/2014', 'time':'09:56', 'content':'Did you know I had a chinese guy in my class that used to be called coaching ?'},
  //                     {'id':4, 'date':'12/10/2014', 'time':'16:01', 'content':'tout a dix balles ou je remballe'},
  //                     {'id':5, 'date':'14/10/2014', 'time':'08:27', 'content':'Lorem ipsum sit amet ....'},
  //                     {'id':6, 'date':'16/10/2014', 'time':'22:45', 'content':'Git reset --hard --head --force ... REAL developers have needs.'},
  //                     {'id':7, 'date':'17/10/2014', 'time':'09:18', 'content':'i\'m never gonna give you up, never gonna let you down'},
  //                     {'id':8, 'date':'17/10/2014', 'time':'09:24', 'content':'I used to remember that I was gay, but sometimes I fagget'}
  //                   ];

  $scope.userPosts = [{
                        'id':1,
                        'date':'10/10/2014',
                        'time':'12:03',
                        'content':'This is my first post',
                        'answers':[{
                                    'id':1,
                                    'user':{
                                            'id' :       2,
                                            'username' : 'ZionLion',
                                            'avatar' :   'webapp/assets/img/galleries/zionLion.png'
                                          },
                                    'content':'Well done man, your first post !'
                                  },
                                  {
                                    'id':2,
                                    'user':{
                                            'id' :       1,
                                            'username' : 'Yinfei',
                                            'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png'
                                          },
                                    'content':'Thank you my friend'
                                  }]
                      },
                      {
                        'id':2,
                        'date':'11/10/2014',
                        'time':'07:34',
                        'content':'AnotherPost',
                        'answers':[{
                                    'id':1,
                                    'user':{
                                            'id' :       2,
                                            'username' : 'ZionLion',
                                            'avatar' :   'webapp/assets/img/galleries/zionLion.png'
                                          },
                                    'content':'This is getting old dude'
                                  },
                                  {
                                    'id':2,
                                    'user':{
                                            'id' :       1,
                                            'username' : 'Yinfei',
                                            'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png'
                                          },
                                    'content':'NEVER'
                                  }]
                      },
                      {
                        'id':3,
                        'date':'11/10/2014',
                        'time':'09:56',
                        'content':'Did you know I had a chinese guy in my class that used to be called coaching ?',
                        'answers':[{
                                    'id':1,
                                    'user':{
                                            'id' :       2,
                                            'username' : 'ZionLion',
                                            'avatar' :   'webapp/assets/img/galleries/zionLion.png'
                                          },
                                    'content':'MAAAAAAAAAN STOP IT !'
                                  }]
                      },
                      {
                        'id':4,
                        'date':'17/10/2014',
                        'time':'09:18',
                        'content':'I\'m never gonna give you up, never gonna let you down',
                        'answers':[]
                      },
                      {
                        'id':5,
                        'date':'17/10/2014',
                        'time':'09:24',
                        'content':'I used to remember that I was gay, but sometimes I fagget',
                        'answers':[{
                                    'id':1,
                                    'user':{
                                            'id' :       1,
                                            'username' : 'Yinfei',
                                            'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png'
                                          },
                                    'content':'true story ...'
                                  }]
                      }
                    ];

});
