import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatSelectModule } from '@angular/material/select';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatButtonModule } from '@angular/material/button';
import { AppUserPagesRoutingModule } from './app-user-pages-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationModule } from '../navigation/navigation.module';
import { ProfileComponent } from './profile/profile.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [HomePageComponent, ProfileComponent, MainPageComponent],
  imports: [
    CommonModule,
    AppUserPagesRoutingModule,
    NavigationModule,
    // MatSelectModule,
    // MatMenuModule,
    // MatButtonModule,
  ],
})
export class AppUserPagesModule {}
