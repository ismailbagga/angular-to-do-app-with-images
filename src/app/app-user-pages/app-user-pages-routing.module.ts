import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageGuard } from './main-page.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'profile', component: ProfileComponent },
    ],
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppUserPagesRoutingModule {}
