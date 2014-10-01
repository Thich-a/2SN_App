App.controller('indexCtrl', function ($scope, $http, $window, $location){

  $http.get("http://192.168.201.4/web/app_dev.php/api/users")
    .success(function(data){
      $scope.response = data;
    })
    .error(function(data){
     console.log("error =", data);
  });

});
