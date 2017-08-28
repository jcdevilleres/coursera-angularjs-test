(function () {
'use strict';

	angular.module('MenuApp')
		.config(RoutesConfig);

		RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
		function RoutesConfig ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/home');

			$stateProvider

				.state('home', {
					url: '/home',
					templateUrl: 'src/Data/Templates/home.html'
				})
				.state('categories', {
					url: '/categories',
					templateUrl: 'src/Data/Templates/categories.template.html',
					controller: 'CategoriesController as ctrl',
					resolve: {
						categoriesItems: ['MenuDataService', function(MenuDataService) {
							console.log(this);
							return MenuDataService.getAllCategories();
						}]
					}
				})
				.state('itemDetail', {
					url: '/items/{shortName}',
					templateUrl: 'src/Data/Templates/items.template.html',
					controller: 'itemsController as ctrl',
					resolve : {
						item : ['$stateParams', 'MenuDataService',
							function ($stateParams, MenuDataService) {
								return MenuDataService.getItemsForCategory($stateParams.shortName);
									// .then(function (shortName) {
									// 	return items[$stateParams.shortName];
									// });
							}
						]
					}
				});
		}
})();
