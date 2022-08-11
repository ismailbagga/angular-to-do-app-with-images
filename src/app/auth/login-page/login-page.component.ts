import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUserService } from 'src/app/services/app-user/app-user.service';
import { AuthSuperComponent } from '../AuthSuperComponent';
export interface UsernamePasswordRequest {
  username: string;
  password: string;
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent extends AuthSuperComponent implements OnInit {
  constructor(private appUserService: AppUserService, private router: Router) {
    let form: FormGroup = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20), // validate String length
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
    });
    super(form);
    document.title = 'Login / Task Manager';
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.isFormInvalid()) {
      return;
    }
    const value = this.formValue<UsernamePasswordRequest>();

    this.setLoading(true);
    this.appUserService.login(value).subscribe({
      next: (val) => {
        console.log(val);
        this.setLoading(false);
        this.router.navigateByUrl('/');
      },
      error: (exception) => {
        this.setLoading(false);
        const { status } = exception;
        console.log(status);
        // console.log(message);
        if (status == HttpStatusCode.Forbidden) {
          this.onShow('invalid username or password');
        } else this.onShow('Internal Server Error try again');
      },
    });
  }
}
