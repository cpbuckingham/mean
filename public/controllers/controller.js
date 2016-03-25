var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    person1={
      name: "Tim",
      email: "tim@gmail.com",
      number: "111-111-1111"
    }
    person2={
      name: "John",
      email: "john@gmail.com",
      number: "222-111-1111"
    }
    person3={
      name: "Ally",
      email: "ally@gmail.com",
      number: "333-111-1111"
    }

    var contactlist= [person1, person2, person3];

}]);
