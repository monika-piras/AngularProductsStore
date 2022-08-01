import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private productsService: ProductsService) { }

  categories:string[] = [];

  ngOnInit(): void {
    this.initCategoryList();
    console.log("categoryList: ", this.categories);
  }

  initCategoryList () {
    this.categories = this.productsService.getCategoryList();
  }
}