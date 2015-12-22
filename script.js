
var module = angular.module('datepicker', []);

module.controller('mainController', function($scope) {

  $scope.myDate = null;
  $scope.myDate = new Date;
  $scope.myDate = moment();
});





