(function () {

	angular.module('MenuApp')
	.controller('itemsController', itemsController);

	itemsController.$inject = ['item'];
	function itemsController (item) {
		console.log("Iems controller is being called");
		var ctrl = this;
		console.log(item);
		ctrl.items = item.menu_items;

	}

})();
