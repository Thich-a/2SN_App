App.controller('accountCtrl', function ($scope, $http, $window, $location){

  $scope.user = {
                  'id' : 1,
                  'username' : 'Yinfei',
                  'avatar' :   'webapp/assets/img/fixtures-pictures/yinfei.png',
                  'usermail':'swagster@skyblog.web',
                  'plan': 2
                };

  $scope.plans = [{
                    'id' : 1,
                    'name' : 'Freemium'
                  },
                  {
                    'id' : 2,
                    'name' : 'Plus'
                  },
                  {
                    'id' : 3,
                    'name' : 'Premium'
                  }];

  $scope.setUserPlan = function(userPlan) {
    for (plan in $scope.plans)
      if ($scope.plans[plan].id == userPlan)
        $scope.userPlan = $scope.plans[plan];
  }

  $scope.setUserPlan($scope.user.plan);

  $('#account-picture').attr('src', $scope.user.avatar);
  $('#account-username').html($scope.user.username);
  $('#account-usermail').val($scope.user.usermail);

  setTimeout(function(){
    $('#planSelect').val($scope.userPlan.id);
    $('.selectpicker').selectpicker();
  }, 100);

});
