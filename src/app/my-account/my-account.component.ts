import { Component } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {

  countries = ['Italy', 'Spain',
            'Canada', 'Germany'];

  model ={
    id : 18,
    name: "Name1",
    surname: "Surname1",
    email: "youremail@gmail.com",
    country: this.countries[0],
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  // newHero() {
  //   this.model = {id: 5, name:"",power:""}
  // }
}