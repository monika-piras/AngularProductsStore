import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  itemsCart: Product[] = [];
  constructor(private cartService: CartService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.itemsCart = this.cartService.getCartList();
  }

  vewItem(paramID: number) {
    console.log("clicked img" + paramID);
    this.router.navigate(['/product-detail', paramID]);
  }

  removeToCart(paramID: number) {
    this.cartService.removeItem(paramID);
    this._snackBar.open('Item removed from the Cart', 'Close', {
      duration: 3000
    });
  }

  isCartEmpty(): boolean {
    return this.itemsCart.length==0;
  }
  
}