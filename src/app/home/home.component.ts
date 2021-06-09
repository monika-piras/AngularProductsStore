import { Component, OnInit } from '@angular/core';
import {ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.servWorks();
  }

}