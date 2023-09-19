import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SecundarioComponent } from './secundario/secundario.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SecundarioComponent,
    NoencontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    console.log("soy el modulo");
  }

}
