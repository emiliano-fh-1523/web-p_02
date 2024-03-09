const products = []

class ProdList {

    //CRUD METHODS
    static addProduct(name, description, imageUrl, unit, stock, pricePerUnit, category){}
    static createProduct(product) {}  
    static getProducts(){}  
    static getProductById(uuid) {} 
    static updateProduct(uuid, updatedProduct) {}
    static deleteProduct(uuid) {}
    static toHtmlList(list){}
    static toHtmlTable(list){}
    
    //FILTER METHOD
    static filterProducts(query) {} 
   
    // you don't need to modify this method, use it to test your code
    static log(list = products){ 
        console.table(list) 
    }   
}


// You don't need to modify this class, use it to render the products
// View.renderList() to render the list of products (show the products in a web page)
// View.renderTable() to render the table of products 
class View {
    static render(html, elementId){
        document.querySelector(`#${elementId}`).innerHTML = html;
    }
    static renderList(list = products, elementId = "pList"){
        let html = ProdList.toHtmlList(list); //  implement ProdList.toHtmlList method
        this.render(html, elementId);
    }
    static renderTable(list = products, elementId = "pTable"){
        let html = ProdList.toHtmlTable(list); //  implement ProdList.toHtmlTable method
        this.render(html, elementId);
    }
    static searchProduct(uuid, elementId = "pList"){
        let product = ProdList.getProductById(uuid); // implement ProdList.getProductById method
        View.renderList([product], elementId);
    }
}

ProdList.printToConsole();
//View.renderList(); // Render the list of products
//View.renderTable(); // Render the table of products
