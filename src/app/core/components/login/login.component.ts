import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'cms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private sbService: SnackbarService) { }

  ngOnInit(): void {
  }

  // form group
  userFormG = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    remember: new FormControl(true)
  });

  userFormGSubmit() {
    this.userFormG.markAllAsTouched();

    if (this.userFormG.valid) {
      console.log("userFormG: ", this.userFormG)
      this.sbService.success("Login success")
    } else {
      console.log("Form invalid")
    }

  }

  // TODO
  loginByFb() {
    this.sbService.error("Yet to implement...");
  }


  // TODO
  forgotPassword() {
    this.sbService.error("Yet to implement...");
  }




}
