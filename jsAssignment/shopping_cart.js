"use strict";

class ShoppingCartException {}

//Only one constructor that saves uuid and quantity 
class ProductProxy {}   

class ShoppingCart {
   
    constructor() { }
    get productProxies() { }
    set productProxies(value) { }
    get products() { }
    set products(value) {}
    addItem(productUuid, amount) {}
    updateItem(productUuid, newAmount) {}
    removeItem(productUuid) {}
    calculateTotal() {}

    //this method is Optional, 
    //receives a function to render the shopping cart and its arguments
    showShoppingCart(fnRender, args) {}  
}

