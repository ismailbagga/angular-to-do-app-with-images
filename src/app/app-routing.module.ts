import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageGuard } from './app-user-pages/main-page.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./app-user-pages/app-user-pages.module').then(
        (m) => m.AppUserPagesModule
      ),
    canLoad: [MainPageGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
