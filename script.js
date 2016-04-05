
var module = angular.module('datepicker', []);

module.controller('mainController', function($scope) {

  $scope.myDate = null;
  $scope.myDate = new Date;
  $scope.myDate = moment();

});


module.directive('myCalendar', function() {
  return {
    scope : {
      month : '='
    },
    templateUrl : 'calendar.html',
    link        : function($scope, $element, $attrs) {
      $scope.weeks = []

      $scope.$watch('month', function(date) {
        if(!date) return ;
        var month = date.split('.')[1]
        $scope.weeks = [
          { weekNumber : month },
        ]
      })
    }

  }
})


module.directive('myDatepicker', function() {
  return {
    scope : {
      ngModel: '='
    },
    template: '<input ng-focus="focus()" ng-blur="blur()" ng-model="model" /><div my-calendar month="model"></div>',
    link : function($scope, $element, $attr) {
      var model = $scope.ngModel && moment($scope.ngModel)

      if(model && model.isValid()) {
        $scope.model = model.format('DD.MM.YYYY')
      } else {
        model = moment().format('DD.MM.YYYY')
      }
      console.log($element)
      $scope.focus = function() {
        console.log('I was focused!')
      }

      $scope.blur = function() {
        console.log('I was blurreddddd')
      }

      $scope.$watch('model', function(model) {
        var date = moment(model, 'DD.MM.YYYY')
        if(date.format('DD.MM.YYYY') == model) {
          $scope.ngModel = date
        }
      })
    }
  }
})