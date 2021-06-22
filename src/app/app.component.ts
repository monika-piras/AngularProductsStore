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

  getTotal(): number {
    return this.cartService.getCartList().length;
  }
}