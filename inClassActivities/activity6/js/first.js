var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope, uppercaseFilter) {
  $scope.first = 'Some';
  $scope.last = 'One';
  $scope.heading = 'Message: ';
  $scope.updateMessage = function() {
    $scope.message = 'Hello ' + $scope.first +' '+ uppercaseFilter($scope.last) + '!';
  };
});
