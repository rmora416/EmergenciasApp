import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoletaParentComponent } from './boleta-parent/boleta-parent.component';
import { DatosGeneralesComponent } from './datos-generales/datos-generales.component';

@NgModule({
  declarations: [
    AppComponent,
    BoletaParentComponent,
    DatosGeneralesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
