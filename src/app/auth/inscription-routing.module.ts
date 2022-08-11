import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AuthHttpInterceptor } from '../interceptos/AuthHttpIntercepto';
import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: SignUpPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  // ],
})
export class InscriptionRoutingModule {}
