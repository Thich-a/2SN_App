App.controller('postShowCtrl', function ($scope, $http, $window, $location, $routeParams){

  $scope.userid = $routeParams.user;

  $scope.user = {
                  'id' :       1,
                  'username' : 'Yinfei',
                  'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png'
                }

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

  $scope.fetchPost = function() {
    for (post in $scope.userPosts)
    {
      if ($scope.userPosts[post].id == $routeParams.id)
        $scope.currentPost = $scope.userPosts[post];
    }
  }
  $scope.fetchPost();
  $scope.answers = $scope.currentPost.answers;
});
