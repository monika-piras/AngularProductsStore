import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  @Input() categoryCode: string | null;
  products: Product[] = [];

  constructor(private productsService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    console.log('Categoria passata:', this.categoryCode);
    this.productsService.servWorks();
    if(this.categoryCode) {
      this.products = this.productsService.getProductListFilteredByCategory(this.categoryCode);
    }
  }

  vewItem() {
    console.log("clicked img");
    // this.router.navigate(['/product-detail']);
    this.router.navigateByUrl('/product-detail');
  }
}
