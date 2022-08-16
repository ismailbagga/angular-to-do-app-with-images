import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppUserPagesRoutingModule } from './app-user-pages-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ProfileComponent } from './profile/profile.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TasksComponent } from './tasks/tasks.component';
import { WidgetModule } from '../widget/widget.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomePageComponent,
    ProfileComponent,
    MainPageComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    AppUserPagesRoutingModule,
    NavigationModule,
    WidgetModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
})
export class AppUserPagesModule {}
