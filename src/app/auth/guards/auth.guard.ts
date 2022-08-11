import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, skipWhile, take, tap } from 'rxjs';
import { AppUserService } from '../../services/app-user/app-user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authUserService: AppUserService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let url = route.url.toString();
    console.log(url);

    let obs = this.authUserService.getObs().pipe(
      skipWhile((status) => {
        return status === null;
      }),
      take(1),

      map((auth) => {
        if (auth === true) {
          this.router.navigateByUrl('/');
        }
        return !auth;
      })
    );
    return obs as Observable<boolean>;
    // return this.authUserService.getObs() ;
  }
}
