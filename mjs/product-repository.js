"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
class productRepository {
    constructor() {
        this.products = [];
    }
    addItem(product) {
    }
    getItems() {
        return [];
    }
    getItemById(id) {
        return new product_1.Product();
    }
    showItemsInHTML() {
        return "ABC";
    }
}
