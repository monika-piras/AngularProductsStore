import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  listCart: number[] = [];

  constructor() {
    console.log("initCartServuce");
   }

   addItem(paramIdProduct: number){

     console.log("added item with id " + paramIdProduct);
     this.listCart.push(paramIdProduct);
     console.log(this.listCart);
   }

   getCartList():number[]{
    return this.listCart;
   }

}
