import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { Routes } from '@angular/router';

@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavComponent, FooterComponent],
})
export class NavigationModule {}
