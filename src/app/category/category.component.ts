import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { NotificationService } from '../notification.service';

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
    private cartService: CartService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    console.log('Category:', this.categoryCode);
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
    var list = this.productsService.getProductListFilteredByCategory(this.categoryCode);
    this.products = list.slice(0, this.maxItems ? this.maxItems : list.length );
  }

  vewItem(paramID: number) {
    console.log("clicked img " + paramID);
    this.router.navigate(['/product-detail', paramID]);
    // this.router.navigateByUrl('/product-detail');
  }

  addToCart(product: Product) {
    this.cartService.addItem(product);
    this.notificationService.success('Item added to Cart');
  }
}