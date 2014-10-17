App.controller('accountCtrl', function ($scope, $http, $window, $location){
  $scope.user = {'username':'Yinfei', 'usermail':'swagster@skyblog.web', 'plan':1, 'avatar':'webapp/assets/img/fixtures-pictures/yinfei.png'};

  $('#account-picture').attr('src', $scope.user.avatar);
  $('#account-username').html($scope.user.username);
  $('#account-usermail').val($scope.user.usermail);
  $('#planSelect').val($scope.user.plan);

});
