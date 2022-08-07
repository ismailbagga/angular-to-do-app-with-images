import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InscriptionRoutingModule } from './inscription-routing.module';

import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [LoginPageComponent, SignUpPageComponent],
  imports: [CommonModule, InscriptionRoutingModule, ReactiveFormsModule,WidgetModule],
})
export class InscriptionModule {}
