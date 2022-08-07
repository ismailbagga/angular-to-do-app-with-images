import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20), // validate String length
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
  });
  constructor() {
    document.title = 'Login / Task Manager';
  }
  getController(name: string): FormControl {
    let control = this.loginForm.get(name);
    if (control instanceof FormControl) {
      return control;
    }
    throw new Error(`no controler from login form named as  ${name}`);
  }
  ngOnInit(): void {}
}
