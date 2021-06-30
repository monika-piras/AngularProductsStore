import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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

  @Input() categoryCode: string;
  @Input() maxItems: number;

  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    console.log('Categoria passata:', this.categoryCode);
    this.loadProductList();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const newCategory = changes.categoryCode;
    if (newCategory) {
      this.loadProductList();
    }
  }

  loadProductList() {
    var lista = this.productsService.getProductListFilteredByCategory(this.categoryCode);
    this.products = lista.slice(0, this.maxItems?this.maxItems: lista.length );
  }

  vewItem(paramID: number) {
    console.log("clicked img" + paramID);
    this.router.navigate(['/product-detail', paramID]);
    // this.router.navigateByUrl('/product-detail');
  }

  addToCart(product: Product) {
    this.cartService.addItem(product);
  }
}