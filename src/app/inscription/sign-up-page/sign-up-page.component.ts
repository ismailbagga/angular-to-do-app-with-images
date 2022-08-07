import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
})
export class SignUpPageComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20), // validate String length
    ]),
    fullName: new FormControl(null, [
      Validators.required,
      Validators.maxLength(50),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
  });

  constructor() {
    document.title = 'Sign up / Task Manager';
  }

  ngOnInit(): void {}

  getController(name: string): FormControl {
    let control = this.registerForm.get(name);
    if (control instanceof FormControl) {
      return control;
    }
    throw new Error(`no controler from login form named as  ${name}`);
  }
}
