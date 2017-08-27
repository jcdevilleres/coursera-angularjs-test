(function () {
'use strict'

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/data/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
