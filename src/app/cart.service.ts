import { Injectable } from '@angular/core';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  listCart: Product[] = [];

  constructor() {
    console.log("initCartServuce");
  }

  addItem(product: Product) {
    console.log("added item with object " + product);
    this.listCart.push(product);
    console.log(this.listCart);
  }
  getCartList(): Product[] {
    return this.listCart;
  }
}