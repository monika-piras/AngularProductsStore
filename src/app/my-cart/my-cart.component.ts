import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  itemsCart:Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.itemsCart = this.cartService.getCartList();
  }
}