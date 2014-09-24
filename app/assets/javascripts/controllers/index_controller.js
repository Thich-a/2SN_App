App.controller('indexCtrl', function ($scope, $http, $window, $location){

  $http.get("http://localhost:8888/ETNA/2SN_Core/web/app_dev.php/api/users")
    .success(function(data){
      $scope.response = data;
    })
    .error(function(data){
     console.log("error =", data);
  });

});
