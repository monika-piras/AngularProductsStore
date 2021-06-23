import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-products-store';
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  isBadgeVisible(): boolean {
    return this.getTotal() < 1;
  }
  
  getTotal(): number {
    return this.cartService.getCartList().length;
  }
}