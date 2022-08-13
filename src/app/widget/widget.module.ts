import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInputComponent } from './forms/login-input/login-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WarningHeaderComponent } from './forms/warning-header/warning-header.component';
import { LogoutComponent } from './logout-model/logout.component';
import { ModelComponent } from './model/model.component';
import { CirlceComponent } from './cirlce/cirlce.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginInputComponent,
    WarningHeaderComponent,
    LogoutComponent,
    ModelComponent,
    CirlceComponent,
    DropDownListComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    LoginInputComponent,
    WarningHeaderComponent,
    LogoutComponent,
    CirlceComponent,
    DropDownListComponent,
  ],
})
export class WidgetModule {}
