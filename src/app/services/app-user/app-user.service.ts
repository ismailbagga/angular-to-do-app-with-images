import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppUser, IAppUser } from 'src/app/models/AppUser.model';
import { UsernamePasswordRequest } from 'src/app/auth/login-page/login-page.component';

@Injectable({
  providedIn: 'root',
})
export class AppUserService {
  private isAuthenticated$: BehaviorSubject<boolean | null> =
    new BehaviorSubject<boolean | null>(null);

  private http: HttpClient;
  private urlPrefix = environment.backendUrl + '/users';

  constructor(http: HttpClient) {
    this.http = http;
    this.isAuthenticated();
  }
  getObs() {
    return this.isAuthenticated$;
  }
  setAuthenticationState(state: boolean) {
    this.isAuthenticated$.next(state);
  }
  getAuthState() {
    return this.isAuthenticated$.asObservable();
  }
  logout() {
    this.setAuthenticationState(false);
    localStorage.removeItem('access-token');
    // delete coockies if exits ;
  }

  login(value: UsernamePasswordRequest) {
    let header = new HttpHeaders().append('Content-Type', 'application/json');

    return this.http.post(this.Url('/login'), value, { headers: header });
  }
  signUp(appUser: IAppUser) {
    return this.http.post(this.Url('/save'), appUser);
  }

  authenticate() {
    this.isAuthenticated$.next(null);
    let obs = this.http.get<{ authenticated: boolean; username: string }>(
      this.Url('/authentication/state')
    );

    obs.subscribe({
      next: (val) => this.setAuthenticationState(val.authenticated),
      error: (err) => this.setAuthenticationState(false),
    });
  }
  isAuthenticated() {
    // return (
    //   this.isAuthenticated$.value ||
    //   localStorage.getItem('access-token') !== null
    // );
  }
  Url(suffix: string) {
    return this.urlPrefix + suffix;
  }
  test() {
    return this.http.get(this.Url('/public'));
  }
}
