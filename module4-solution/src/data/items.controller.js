(function () {
'use strict'

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['item'];
function ItemsController(item) {
  var ctrl = this;
  ctrl.items = item.menu_items;
}

})();
