import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // form group
  userFormG = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    remember: new FormControl('')
  });

  userFormGSubmit() {
    this.userFormG.markAllAsTouched();

    if (this.userFormG.valid) {
      console.log("userFormG: ", this.userFormG)
    } else {
      console.log("Form invalid")
    }

  }




}
