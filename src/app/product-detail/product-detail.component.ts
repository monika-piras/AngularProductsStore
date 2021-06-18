import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../models';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  idVar: number;
  productSelected: Product;

  constructor(private _Activatedroute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    var idString = this._Activatedroute.snapshot.paramMap.get("id");
    var idNumber = Number(idString);

    this.idVar = idNumber;

    // oppure
    // this.idVar = Number(this._Activatedroute.snapshot.paramMap.get("id"));
    
    const tempProduct = this.productsService.getProductById(this.idVar);

    if(tempProduct){
      this.productSelected = tempProduct;
    }

  }


}
