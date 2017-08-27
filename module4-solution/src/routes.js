(function () {
'use strict'

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

// Redirect to home page if no other URL matches
$urlRouterProvider.otherwise('/home');

// *** Set up UI states ***
$stateProvider

// Home page
.state('home', {
url: '/home',
templateUrl: 'src/data/templates/home.template.html'
})

// Categories page
.state('categories', {
url: '/categories',
templateUrl: 'src/data/templates/categories.template.html',
controller: 'CategoriesController as ctrl',
resolve: {
  categories: ['MenuDataService', function () {
    return MenuDataService.getAllCategories();
  }]
}
})

// Item detail
.state('items', {
url: '/items/{shortName}',
templateUrl: 'src/data/templates/items.template.html',
controller: 'ItemsController as ctrl',
resolve: {
  item: ['$stateParams', 'MenuDataService',
    function ($stateParams, MenuDataService) {
      return MenuDataService.getItemsForCategory($stateParams.shoshortName);
    }
  ]
}
});

}


})();
