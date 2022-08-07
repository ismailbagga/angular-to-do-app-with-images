import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionModule } from './inscription/inscription.module';

import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    InscriptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
