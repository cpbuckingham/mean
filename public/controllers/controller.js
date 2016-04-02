var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $http.get('/contactlist').success(function (response) {
        console.log("I got the data");
        $scope.contactlist = response;
    });
    $scope.addContact = function(){
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact);
    }
}]);
