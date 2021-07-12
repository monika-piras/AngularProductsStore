import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {

  countries = ['Italy', 'Spain',
    'Canada', 'Germany'];

  model = {
    id: 18,
    name: "",
    surname: "",
    email: "",
    address: "",
    postcode: "",
    city: "",
    number: "",
    country: this.countries[0]
  }
  constructor(private _snackBar: MatSnackBar) {}
  
  onSubmit() {
    console.log("form submitted", this.model);
    // alert(JSON.stringify(this.model));
    this._snackBar.open('Form submitted', 'Close', {
      duration: 3000
    });
  }
}