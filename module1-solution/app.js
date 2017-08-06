(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.countOfDishes = 0;
  $scope.message = "";

  $scope.displayCountDishes = function () {
    $scope.countOfDishes = countDishes($scope.dishes);

    if($scope.countOfDishes == 0)
      $scope.message = "Please enter data first";
    else if($scope.countOfDishes <= 3 && $scope.countOfDishes != 0) {
      $scope.message = "Enjoy!";
      }
    else {
      $scope.message = "Too Much!";
    }
  };

  function countDishes(string){
    var totalDishes = 0;
    var dishesArray = [];
    if(string != "") {
      dishesArray = string.split(',');
      dishesArray = dishesArray.filter(e => String(e).trim());
      totalDishes = dishesArray.length;
      $scope.dishesArray = dishesArray;
      }
    return totalDishes;
  };
}

})();
