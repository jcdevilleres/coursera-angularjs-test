(function () {
'use strict'

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/data/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
