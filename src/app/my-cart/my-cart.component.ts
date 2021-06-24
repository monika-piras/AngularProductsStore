import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  itemsCart:Product[] = [];

  constructor(private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.itemsCart = this.cartService.getCartList();
  }

  vewItem(paramID:number) {
    console.log("clicked img"+ paramID);
    this.router.navigate(['/product-detail', paramID]);
  }

  removeToCart(paramID:number){
    this.cartService.removeItem(paramID);
  }
}