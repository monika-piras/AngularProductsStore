import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  idVar:number;
  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    var idString = this._Activatedroute.snapshot.paramMap.get("id");
    var idNumber = Number(idString);

    this.idVar = idNumber;

    // oppure
    // this.idVar = Number(this._Activatedroute.snapshot.paramMap.get("id"));
    
  }


}
