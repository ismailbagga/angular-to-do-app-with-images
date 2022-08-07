import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInputComponent } from './forms/login-input/login-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginInputComponent],
})
export class WidgetModule {}
