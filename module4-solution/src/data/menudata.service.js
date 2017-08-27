(function () {
'use strict'

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;
  var categories = [];
  var items = [];

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    })
    .then(function(response){
      return response.data;
    })
    .catch(function(error) {
      console.log("Error found on MenuDataService getAllCategories" + error);
      return error;
    });

  };

  service.getItemsForCategory = function (shortName) {
    return $http({
      method: "GET",
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json', params: {
        category: shortName
      }
    })
    .then(function(response){
      return response.data;
    })
    .catch(function(error) {
      console.log("Error found on MenuDataService getItemsForCategory" + error);
      return error;
    });

  };


}

})();
