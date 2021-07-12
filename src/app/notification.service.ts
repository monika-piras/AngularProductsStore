import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) { }

  success(param:string) {
    this._snackBar.open(param, '', {
      duration: 3000,
      panelClass: ['green-snackbar']
    });
  }

  error(param:string) {
    this._snackBar.open(param, 'Close', {
      duration: 3000,
      panelClass: ['red-snackbar']
    });
  }
}
