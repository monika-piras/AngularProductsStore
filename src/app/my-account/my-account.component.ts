import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

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
  constructor(
    private notificationService: NotificationService) { }

  onSubmit() {
    console.log("form submitted", this.model);
    // alert(JSON.stringify(this.model));
    this.notificationService.success('Form Submitted');
  }
}