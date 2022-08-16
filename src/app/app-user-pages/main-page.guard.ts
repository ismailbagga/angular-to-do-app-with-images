import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, skipWhile, take, tap, map } from 'rxjs';
import { AppUserService } from '../services/app-user/app-user.service';

@Injectable({
  providedIn: 'root',
})
export class MainPageGuard implements CanLoad {
  constructor(private authService: AppUserService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let obs = this.authService.getObs().pipe(
      skipWhile((val) => {
        return val === null;
      }),

      take(1),

      tap((is: boolean | null) => {
        if (!is) {
          this.router.navigateByUrl('/login');
        }
      })
    );
    return obs as Observable<boolean>;
  }
}
