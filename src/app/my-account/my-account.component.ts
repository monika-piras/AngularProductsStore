import { Component } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {

  countries = ['Italy', 'Spain',
            'Canada', 'Germany'];

  model = {
    id : 18,
    name: "",
    surname: "",
    email: "",
    address: "",
    postcode: "",
    city: "",
    province: "",
    number: "",
    country: this.countries[0],
  }

  onSubmit() { 
    console.log("form submitted" , this.model); 
    alert(JSON.stringify(this.model));
  }
}