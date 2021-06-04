import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    { title: 'Shiba Inu', subtitle: 'Dog Breed', description: ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes'},
    { title: 'Vic', subtitle: 'Reynolds', description: 'vic.reynolds@test.com', role: 'Admin' },
    { title: 'Gina', subtitle: 'Jabowski', description: 'gina.jabowski@test.com', role: 'Admin' },
    { title: 'Jessi', subtitle: 'Glaser', description: 'jessi.glaser@test.com', role: 'User' },
    // { title: 'Jay', subtitle: 'Bilzerian', description: 'jay.bilzerian@test.com', role: 'User' },
    // { title: 'Jay', subtitle: 'Bilzerian', description: 'jay.bilzerian@test.com', role: 'User' },
    // { title: 'Jay', subtitle: 'Bilzerian', description: 'jay.bilzerian@test.com', role: 'User' }
  ];

}
