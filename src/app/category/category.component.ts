import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  @Input() categoryCode: string | null;
  
  products: Product[] = [];


  constructor(
    private productsService: ProductsService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    console.log('Categoria passata:', this.categoryCode);
    this.productsService.servWorks();
    if(this.categoryCode) {
      this.products = this.productsService.getProductListFilteredByCategory(this.categoryCode);
    }
  }

  vewItem(paramID:number) {
    console.log("clicked img"+ paramID);
    this.router.navigate(['/product-detail', paramID]);
    // this.router.navigateByUrl('/product-detail');
  }

  addToCart(paramID:number) {
    // console.log("added to cart" + paramID);
    // this.router.navigate(['/my-cart']);
    this.cartService.addItem(paramID);
  }
}
