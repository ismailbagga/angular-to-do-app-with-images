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
import { TaskComponent } from './task/task.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskFormComponent } from './forms/task-form/task-form.component';
import { MtInputComponent } from './forms/mt-input/mt-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MtSlideInputComponent } from './forms/mt-slide-input/mt-slide-input.component';

@NgModule({
  declarations: [
    LoginInputComponent,
    WarningHeaderComponent,
    LogoutComponent,
    ModelComponent,
    CirlceComponent,
    DropDownListComponent,
    TaskComponent,
    TaskFormComponent,
    MtInputComponent,
    MtSlideInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  exports: [
    LoginInputComponent,
    WarningHeaderComponent,
    LogoutComponent,
    CirlceComponent,
    DropDownListComponent,
    TaskComponent,
    TaskFormComponent,
  ],
})
export class WidgetModule {}
