"use strict";

class ProductException {
  constructor(errorMessage) {
    this.message = errorMessage;
    this.name = "ProductException";
  }
}

// This class focuses on creating/editing objects (it does not use any object lists at all)
class Product {
  // Constructor here

  // Returns the _uuid
  get uuid() {
    return this._uuid;
  }

  // Throws an exception for attempting to set an id
  // use generateUUID() from utils.js to set the _uuid
  set uuid(value) {}

  // Getters and setters for each property: name, description, imageUrl, unit, stock, pricePerUnit, category
  // Remember to use underscores in variables: this._name, this._unit
  // Perform corresponding validations in the getters
  get name() {
    return this._name;
  }
  set name(value) {
    if (value === "") {
      throw new ProductException("Name cannot be empty");
    }
  }

  get description() {
    return this._description;
  }
  set description(value) {
    if (value === "" && value === String) {
      throw new ProductException("Description cannot be empty");
    }
  }

  get imageUrl() {
    return this._imageUrl;
  }
  set imageUrl(value) {
    if (value === "" && value === String) {
      throw new ProductException("Image URL cannot be empty");
    }
  }

  get unit() {
    return this._unit;
  }
  set unit(value) {
    if (value === "" && !isNaN(value) && value < 0) {
      throw new ProductException("Unit cannot be empty");
    }
  }

  get stock() {
    return this._stock;
  }
  set stock(value) {
    if (value === "" && !isNaN(value) && value < 0) {
      throw new ProductException("Stock cannot be empty");
    }
  }

  get pricePerUnit() {
    return this._pricePerUnit;
  }
  set pricePerUnit(value) {
    if (value === "" && !isNaN(value) && value < 0) {
      throw new ProductException("Price per unit cannot be empty");
    }
  }

  get category() {
    return this._category;
  }
  set category(value) {
    if (value === "" && value === String) {
      throw new ProductException("Category cannot be empty");
    }
  }

  // Removes all the properties that are not part of a product
  static cleanObject(obj) {
    let newObj = {};
    for (let prop in obj) {
      if (
        obj.hasOwnProperty(prop) &&
        (prop === "name" ||
          prop === "description" ||
          prop === "imageUrl" ||
          prop === "unit" ||
          prop === "stock" ||
          prop === "pricePerUnit" ||
          prop === "category")
      ) {
        newObj[prop] = obj[prop];
      }
    }
    return newObj;
  }

  // cleans the obj, tests if it has the required properties and returns a new Product
  static createFromObject(obj) {
    let newObj = Product.cleanObject(obj);
    if (
      newObj.hasOwnProperty("name") &&
      newObj.hasOwnProperty("description") &&
      newObj.hasOwnProperty("imageUrl") &&
      newObj.hasOwnProperty("unit") &&
      newObj.hasOwnProperty("stock") &&
      newObj.hasOwnProperty("pricePerUnit") &&
      newObj.hasOwnProperty("category")
    ) {
      return new Product(
        newObj.name,
        newObj.description,
        newObj.imageUrl,
        newObj.unit,
        newObj.stock,
        newObj.pricePerUnit,
        newObj.category
      );
    } else {
      throw new ProductException(
        "Object does not have the required properties"
      );
    }
  }

  // Returns the product in HTML format
  // default order is uuid, name, description, imageUrl, unit, stock, pricePerUnit, category
  static toHtmlRow(obj, propOrder = []) {
    let html = "<tr>\n";
    if (propOrder.length === 0) {
      html += `<td>${obj.uuid}</td>\n`;
      html += `<td>${obj.name}</td>\n`;
      html += `<td>${obj.description}</td>\n`;
      html += `<td><img src="${obj.imageUrl}" alt="${obj.name}"></td>\n`;
      html += `<td>${obj.unit}</td>\n`;
      html += `<td>${obj.stock}</td>\n`;
      html += `<td>${obj.pricePerUnit}</td>\n`;
      html += `<td>${obj.category}</td>\n`;
    } else {
      for (let prop of propOrder) {
        html += `<td>${obj[prop]}</td>\n`;
      }
    }
    html += "</tr>";
    return html;
  }
  // Returns a html string similar to the first integrated assignment, but hide those properties in the array
  // The hideProps array indicates which properties will be hidden
  static toHtmlDiv(obj, hideProps = ["stock"]) {
    let html = "<tr>\n";
    if (propOrder.length === 0) {
      html += `<h3>${obj.name}</h3>\n`;
      html += `<img src="${obj.imageUrl}" alt="${obj.name}">\n`;
      html += `<p>${obj.description}</p>\n`;
      html += `<p>Unit: ${obj.unit}</p>\n`;
      html += `<p>Stock: ${obj.stock}</p>\n`;
      html += `<p>Price per unit: ${obj.pricePerUnit}</p>\n`;
      html += `<p>Category: ${obj.category}</p>\n`;
      html += "</div>";
    } else {
      for (let prop of propOrder) {
        if (!hideProps.includes(prop)) {
          html += `<td>${obj[prop]}</td>\n`;
        }
      }
    }
    html += "</tr>";
  }

  // Set a default function to convert a product to HTML
  toHTML(fnToHtml) {
    if (fnToHtml === undefined) {
      fnToHtml = Product.toHtmlDiv;
    }
    return fnToHtml(this);
  }
}
