import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Profile } from './models';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile: Profile;

  constructor() { }

  save(newProfile: Profile): Observable<any> {

    const savingObservable$ = new Observable(observer => {
      setTimeout(() => {
        this.profile = newProfile;
        observer.next('contact saved');
        observer.complete();
      }, 2000);
    });

    return savingObservable$; 

  }

  getProfile() {
    return this.profile;
  }

}