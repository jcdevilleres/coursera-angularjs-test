(function () {
'use strict';

	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];
	function MenuDataService ($http) {

		var ctrl = this;
		var categories = [];
		var items = [];

		ctrl.getAllCategories = function() {

			return $http ({
				method: 'Get',
				url: 'https://davids-restaurant.herokuapp.com/categories.json'
				})
			.then(function (result) {
				console.log(result);

				return result.data;
			})
			.catch(function (error) {
				console.log(error);
				return error;
			});

		};


		ctrl.getItemsForCategory = function (shortName) {
			console.log("getItemsForCategory service is called");
			return $http ({
				method: 'Get',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
				params: {
					category : shortName
				}
				})
				.then(function (response) {
				console.log("Items router is being called");
				console.log(response);

				return response.data;
			})
			.catch(function (error) {
				console.log(error);
				return error;
			});
		};
	}

})();
