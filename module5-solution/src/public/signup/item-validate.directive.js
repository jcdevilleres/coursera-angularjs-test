(function () {
'use strict';

angular.module('public')
.directive('itemValidate', ItemValidate);

function ItemValidate() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function myValidation(value) {
        scope.signupCtrl.validateMenuItem(value)
        .then(function() {
          if (!scope.signupCtrl.error) {
            mCtrl.$setValidity('menuItem', true);
          } else {
            mCtrl.$setValidity('menuItem', false);
          }
        });
        return value;
      }
      mCtrl.$parsers.push(myValidation);
    }
  };
}

})();
