import { Injectable } from '@angular/core';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  listCart: Product[] = [];

  constructor() {
    console.log("initCartService");
  }

  addItem(product: Product) {
    console.log("added item with object " + product);
    this.listCart.push(product);
    console.log(this.listCart);
  }

  getCartList(): Product[] {
    return this.listCart;
  }

  removeItem(paramID:number) {
    var index;

    index = this.listCart.findIndex((item)=>{
      return item.id === paramID;
    });
    console.log("item index: ", index);
    
    this.listCart.splice(index, 1);
  }
}