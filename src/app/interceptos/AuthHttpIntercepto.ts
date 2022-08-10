import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  host = `${environment.backendUrl}`;
  AUTHORIZATION = 'access-token';
  private jwturls: string[] = [
    `${this.host}/users/login`,
    `${this.host}/users/save`,
  ];
  saveToken(response: HttpResponse<any>) {
    const token = response.headers.get('access_token');
    if (token != null) localStorage.setItem('access-token', token);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('access-token');
    if (token != null) {
      req = req.clone({
        setHeaders: {
          access_token: token,
        },
      });
    }
    return next.handle(req).pipe(
      tap((httpEvent) => {
        if (
          httpEvent.type === HttpEventType.Response &&
          httpEvent instanceof HttpResponse
        ) {
          if (this.jwturls.includes(req.url)) {
            this.saveToken(httpEvent);
          }
        }
      })
    );
  }
}
