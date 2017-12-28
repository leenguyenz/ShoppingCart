"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// fall attribute in HTML id,image,name,summary,price,get
class Product {
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    get image() {
        return this._image;
    }
    set image(v) {
        this._image = v;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get summary() {
        return this._summary;
    }
    set summary(v) {
        this._summary = v;
    }
    get price() {
        return this._price;
    }
    set price(v) {
        this._price = v;
    }
    get get() {
        return this._get;
    }
    set get(v) {
        this._get = v;
    }
}
exports.Product = Product;
