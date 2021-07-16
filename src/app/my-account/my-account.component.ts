import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { ProfileService } from '../profile.service';
import { Profile } from '../models';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})

export class MyAccountComponent implements OnInit {

  isLoading = false;

  countries = ['Italy', 'Spain',
    'Canada', 'Germany'];

  model: Profile = {
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
    private notificationService: NotificationService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    const userProfile = this.profileService.getProfile();
    if (userProfile) {
      this.model = userProfile;
    }

  }
  onSubmit() {
    console.log("form submitted", this.model);
    this.isLoading = true;

    this.profileService.save(this.model).subscribe(
      (data) => {
        this.isLoading = false;
        this.notificationService.success('Form Submitted');
      },
      (error) => {
        console.error('error saving profile');
        this.isLoading = false;
        this.notificationService.error('Form Error');
      });
  }
}