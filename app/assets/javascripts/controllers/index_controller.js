App.controller('indexCtrl', function ($scope, $http, $window, $location){

  $http.get("http://172.16.128.168/api/users")
    .success(function(data){
    })
    .error(function(data){
     console.log("error =", data);
  });

});
