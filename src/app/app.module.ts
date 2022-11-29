import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoletaParentComponent } from './boleta-parent/boleta-parent.component';
import { DatosGeneralesComponent } from './datos-generales/datos-generales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { BoletaService } from './Servicios/boleta.service';
import { CatalogosService } from './Servicios/catalogos.service';
import { ListaBoletasComponent } from './lista-boletas/lista-boletas.component';



@NgModule({
  declarations: [
    AppComponent,
    BoletaParentComponent,
    DatosGeneralesComponent,
    ListaBoletasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatTabsModule,
    MatRadioModule,
    MatSelectModule    
  ],
  providers: [
    BoletaService,
    CatalogosService,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
