import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  @Input() categoryCode: string;
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    console.log('Categoria passata:', this.categoryCode);
    this.productsService.servWorks();
    this.products = this.productsService.getProductListFilteredByCategory(this.categoryCode);
  }

}
