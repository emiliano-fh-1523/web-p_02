
/************ Product class *******************/
console.log("*******Product test*********");

// Create 1 product using the constructor and show it in the console
console.log("Create 1 product using the constructor");

// Try to set the uuid and catch the exception showing the message in the console
console.log("Try to set the uuid and catch the exception");
try {
  
} catch (e) {

}

// Try to create a product with an invalid property and catch the exception showing the message in the console
console.log("Try to create a product with an invalid property and catch the exception");
try {
  
} catch (e) {
      
}

// Test cleanObject method and show the result in the console
console.log("Test cleanObject method");

// Test createFromObject method and show the result in the console
console.log("Test createFromObject method");

// Test toHtml methods printing the result in the console
    // Product.toHtmlRow   change the order of the properties
    console.log("Product.toHtmlRow   change the order of the properties");
    
    // Product.toHtmlDiv   hide two properties
    console.log("Product.toHtmlDiv   hide two properties");
    
    // object.toHTML    test it with any of the previous methods
    console.log("object.toHTML    test it with any of the previous methods");


    
/************ ProdList *******************/
console.log("*******ProdList test*********");

// add a product to the list and show the list in the console using ProdList.log
console.log("add a product to the list");

// create a product and add it to the list using the method addProduct and show the list in the console using ProdList.log
console.log("create a product and add it to the list using the method addProduct");


// get a product by id and show it in the console
console.log("get a product by id");


// Create a for loop to add 5 products with this data
    let names = ["watermelon", "onion", "avocado", "banana", "white bread"];
    let descriptions = ["from Mexico", "from Puebla", "from Michoacan", "from Aguascalientes", "from Jalisco"];
    let units = ["piece", "kg", "kg", "kg", "piece"];
    let categories = ["fruit", "vegetable", "vegetable", "fruit", "bread"];
    let prices = [80.50, 125.00, 98.00, 32.00, 62.50];
    let stocks = [15, 5, 10, 8, 25];
    let images = []; // ADD IMAGES TO THE PRODUCTS


//Display products in HTML  (Do it with View.renderList() and View.renderTable() )
    // Display the list of products in the HTML (use the method renderList)
    //console.log("Display the list of products in the HTML (use the method renderList)");


    //Display the table of products in the HTML (use the method renderTable)
    //console.log("Display the table of products in the HTML (use the method renderTable)");


// Update the product list, change some value of a product
console.log("Update the product list, change some value of a product");


// Delete a product from the list
console.log("Delete a product from the list");


// Filter by category (includes) and show the result in the console
console.log("Filter by category (includes)");



// Filter by category (includes) and price and show the result in the console
    // Filter by category and price > 90
    console.log("Filter by category and price > 90");
    
    // Filter by category and price < 90
    console.log("Filter by category and price < 90");
    
    // Filter by category or price > 90
    console.log("Filter by category or price > 90");

// Filter by multiple properties
    // intersection = true
    console.log("Filter with multiple properties intersection = true");
    
    
    // intersection = false
    console.log("Filter with multiple properties intersection = false");



// ******** ShoppingCart ******** //
console.log("*******ShoppingCart test*********");
let cart = new ShoppingCart();

// Add about 4 items (using addItem) and show the shopping cart in the console
console.log("Add about 4 items (using addItem)");


// Update quantity of a product in the cart and show the shopping cart in the console
console.log("Update quantity of a product in the cart");


// Delete a product, and show the shopping cart in the console
console.log("Delete a product");


// Calculate the total of the shopping cart and show it in the console
console.log("Calculate the total of the shopping cart");


// Optional: Show the shopping cart in the HTML (use the method showShoppingCart) in div#cart


// ******** Self  assessment ******** //
// This object will help you to keep track of your progress
// Change the value of each property to true if you have completed the item


let evaluation = {
    "productClass": {
        "constructor": false,
        "getters": false,
        "setters": false,
        "cleanObject": false,
        "createFromObject": false,
        "toHtmlRow": false,
        "toHtmlDiv": false,
        "toHTML": false
    },
    "prodListClass": {
        "addProduct": false,
        "createProduct": false,
        "getProducts": false,
        "getProductById": false,
        "updateProduct": false,
        "deleteProduct": false,
        "toHtmlList": false,
        "toHtmlTable": false,
        "filterProducts": false
    },
    "shoppingCart": {
        "constructor": false,
        "getters": false,
        "setters": false,
        "addItem": false,
        "updateItem": false,
        "deleteItem": false,
        "calculateTotal": false,
        "showShoppingCart": false
    }
}

let conclusions = `
  Set your conclusions here
`