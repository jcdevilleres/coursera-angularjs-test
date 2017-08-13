(function () {
'use strict';

angular.module('ShopplingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemBuyer = this;

  //check items to buy method referencing the service
  itemBuyer.items = ShoppingListCheckOffService.getToBuyItems();

  //buy item method referencing the service
  itemBuyer.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

  //check if toBuy list is empty, everything already bought
  itemBuyer.isEmpty = function() {
    if (itemBuyer.items.length < 1)
      return true;
    else
      return false;
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  //check already bought items method referencing the service
  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

  //check if already Bough list is empty, nothing bought yet
  alreadyBought.isEmpty = function() {
    if (alreadyBought.items.length < 1)
      return true;
    else
      return false;
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  //List of ToBuy items, with cookies of course :)
  var toBuyList = [
      {
        name: "cookies",
        quantity: 1
      },
      {
        name: "apple",
        quantity: 2
      },
      {
        name: "banana",
        quantity: 3
      },
      {
        name: "chocolate",
        quantity: 4
      },
      {
        name: "pear",
        quantity: 5
      }
  ];

  //List of AlreadyBought items, empty at start
  var alreadyBoughtList = [];

  // //get to buy items method
  service.getToBuyItems = function () {
    return toBuyList;
  };

  //get already bought items method
  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtList;
  };

  //buy item methods
  service.buyItem = function (itemIndex){
    alreadyBoughtList.push(toBuyList[itemIndex]);
    toBuyList.splice(itemIndex, 1);
    // alreadyBoughtList.push(toBuyList[itemIndex]);

    console.log(toBuyList);
    console.log(alreadyBoughtList);
  }
}

})();
