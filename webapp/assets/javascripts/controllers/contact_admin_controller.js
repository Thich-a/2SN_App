App.controller('contactAdminCtrl', function ($scope, $http, $window, $location){

  $scope.troubleTypes = [{
                    'id' : 1,
                    'name' : 'report Bug'
                  },
                  {
                    'id' : 2,
                    'name' : 'Report User'
                  },
                  {
                    'id' : 3,
                    'name' : 'Suggestions'
                  },
                  {
                    'id' : 4,
                    'name' : 'Other'
                  }];

  setTimeout(function(){
    $('.selectpicker').selectpicker();
  }, 100);
});
