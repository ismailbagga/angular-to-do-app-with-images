import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: SignUpPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionRoutingModule {}
