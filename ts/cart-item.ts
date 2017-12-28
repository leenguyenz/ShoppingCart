import {Product} from "./product";

export class cartItem{
	product: Product;
	Quantity: number;

	constructor(product: Product,Quantity:number = 1){

	}
	getSubTotal():number{
		return 123;
	}
	showCartItemInHTML():string{
		return "ABC";
	}
}