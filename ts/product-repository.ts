import { Product } from "./product"

class productRepository{
	products: Product[] = [];

	constructor(){

	}

	addItem(product: Product){

	}

	getItems():Product[]{
		return [];
	}

	getItemById(id:number){
		return new Product();
	}

	showItemsInHTML():string{
		return "ABC";
	}


}