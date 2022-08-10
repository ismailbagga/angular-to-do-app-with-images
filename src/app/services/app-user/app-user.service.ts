import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppUser, IAppUser } from 'src/app/models/AppUser.model';
import { UsernamePasswordRequest } from 'src/app/inscription/login-page/login-page.component';

@Injectable({
  providedIn: 'root',
})
export class AppUserService {
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  private http: HttpClient;
  private urlPrefix = environment.backendUrl + '/users';

  constructor(http: HttpClient) {
    console.log('app user service have been intialize');

    this.http = http;
    this.isAuthenticated$.next(this.isAuthenticated());
  }

  login(value: UsernamePasswordRequest) {
    // return this.test();
    // console.table(value);
    let header = new HttpHeaders().append('Content-Type', 'application/json');

    return this.http.post(this.Url('/login'), value, { headers: header });
  }
  signUp(appUser: IAppUser) {
    return this.http.post(this.Url('/save'), appUser);
  }

  isAuthenticated() {
    return false;
  }
  Url(suffix: string) {
    return this.urlPrefix + suffix;
  }
  test() {
    return this.http.get(this.Url('/public'));
  }
}
