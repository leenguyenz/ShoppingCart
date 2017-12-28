import {cartItem} from "./cart-item";
import {Product} from "./product";

class Cart {
	cartItems: cartItem[];
	addProduct(product:Product, quantity:number=1):void{

	}
	updateProduct(product:Product, quantity:number=1):void{

	}
	removeProduct(product:Product):void{

	}
	isEmty():boolean{
		return true;
	}
	getTotalQuantity():number{
		return 3;
	}
	getTotalPrice():number{
		return 20;
	}
	showCartBodyInHTML():string{
		return "123";
	}
	showCartFooterInHTML():string{
		return "123";
	}

}