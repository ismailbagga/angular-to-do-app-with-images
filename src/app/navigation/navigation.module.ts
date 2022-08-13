import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { Routes } from '@angular/router';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [CommonModule, WidgetModule],
  exports: [NavComponent, FooterComponent],
})
export class NavigationModule {}
