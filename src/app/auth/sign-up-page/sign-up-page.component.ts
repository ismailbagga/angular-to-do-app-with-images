import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { IAppUser } from 'src/app/models/AppUser.model';
import { AppUserService } from 'src/app/services/app-user/app-user.service';
import { AuthSuperComponent } from '../AuthSuperComponent';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
})
export class SignUpPageComponent extends AuthSuperComponent implements OnInit {
  constructor(private appUserService: AppUserService, private router: Router) {
    let form: FormGroup = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
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
    super(form);
    document.title = 'Sign up / Task Manager';
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.isFormInvalid()) {
      return;
    }
    const value = this.formValue<IAppUser>();
    console.log(value.username);
    this.setLoading(true);
    this.appUserService.signUp(value).subscribe({
      next: (val) => {
        console.log(val);
        this.setLoading(false);
        this.router.navigateByUrl('/');
      },
      error: (exception) => {
        const {
          error: { message },
          status,
        } = exception;
        console.log(status);
        console.log(message);
        if (
          status == HttpStatusCode.Found ||
          status == HttpStatusCode.Conflict
        ) {
          this.onShow(message);
        } else this.onShow('Internal Server Error try again');

        this.setLoading(false);
      },
    });
  }
}
