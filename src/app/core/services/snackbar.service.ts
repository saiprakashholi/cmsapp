import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 10);
  }

  private snackBarConfig = new MatSnackBarConfig();
  private horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private snackBarAutoHide = '3000';
  private successClass = 'sb_success';
  private errorClass = 'sb_error';


  success(message) {
    this.snackBarConfig.panelClass = this.successClass
    const snackbarRef = this.snackBar.openFromComponent(SnackbarComponent, { ...this.snackBarConfig });
    snackbarRef.instance.message = message;
  }

  error(message) {
    this.snackBarConfig.panelClass = this.errorClass
    const snackbarRef = this.snackBar.openFromComponent(SnackbarComponent, { ...this.snackBarConfig });
    snackbarRef.instance.message = message;
  }

}
