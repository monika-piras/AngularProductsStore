import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  category: string | null;

  constructor(private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this._Activatedroute.params.subscribe(params => {
      this.category = params['category'];
    });
    // this.category= this._Activatedroute.snapshot.paramMap.get("category");
  }

}
