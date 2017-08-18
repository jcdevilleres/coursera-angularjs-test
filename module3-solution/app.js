(function () {
  'use strict'

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);
  // .component('foundItems', {
  //   templateUrl: 'foundItems.html',
  //   bindings: {
  //     items: '<',
  //     title: '@',
  //     onRemove: '&',
  //     search: '<'
  //   }
  // });

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.searchTerm = "";
    menu.displayNothing = "";

    menu.searchMenu = function(searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function (foundItems) {
        menu.found = foundItems;
        console.log(menu.found);
        if (menu.found.length < 1 )
        menu.displayNothing = "Nothing found.";
        else
        menu.displayNothing = "";
      })
      .catch(function (error) {
        console.log("Error found on NarrowItDownController" + error);
      });
    };
    menu.removeItem = function(itemIndex) {
      menu.found.splice(itemIndex, 1);
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      var found = [];
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (response){
        //process all menu items and return narrowed down items
        var allMenuItems = response.data.menu_items;
        if (searchTerm.length == 0) {
          allMenuItems = [];
        }
        else {
          for (var i = 0; i < allMenuItems.length; i++) {
            var string = allMenuItems[i].description;

            if (string.toLowerCase().indexOf(searchTerm) >= 0) {
              found.push(allMenuItems[i]);
            }
          }
        }

        return found;
      })
      .catch(function (error) {
        console.log("Error found on MenuSearchService" + error);
      });

    };
  }

})();
