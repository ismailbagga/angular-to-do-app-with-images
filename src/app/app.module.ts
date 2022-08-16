import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionModule } from './auth/inscription.module';

import { NavigationModule } from './navigation/navigation.module';
import { AuthHttpInterceptor } from './interceptos/AuthHttpIntercepto';
import { WidgetModule } from './widget/widget.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserAnima}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    InscriptionModule,
    AppRoutingModule,
    WidgetModule,
    // NoopAnimationsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
