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
  
  _categoryCode: string | null;
  @Input() maxItems: number;
  
  get categoryCode(): string | null {
      return this._categoryCode;
  }

  @Input() set categoryCode(value: string| null) {
      this._categoryCode = value;
      if(this._categoryCode) {
        this.products = this.productsService.getProductListFilteredByCategory(this._categoryCode).slice(0, this.maxItems);
      }
  }
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    console.log('Categoria passata:', this.categoryCode);
  }

  vewItem(paramID:number) {
    console.log("clicked img"+ paramID);
    this.router.navigate(['/product-detail', paramID]);
    // this.router.navigateByUrl('/product-detail');
  }

  addToCart(product:Product) {
    this.cartService.addItem(product);
  }
}