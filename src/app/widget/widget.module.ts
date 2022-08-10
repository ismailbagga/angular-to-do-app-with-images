import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInputComponent } from './forms/login-input/login-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WarningHeaderComponent } from './forms/warning-header/warning-header.component';

@NgModule({
  declarations: [LoginInputComponent, WarningHeaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginInputComponent, WarningHeaderComponent],
})
export class WidgetModule {}
