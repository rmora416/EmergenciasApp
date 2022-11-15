import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosGeneralesComponent } from './datos-generales/datos-generales.component';
import {BoletaParentComponent} from './boleta-parent/boleta-parent.component'

const routes: Routes = [
  {path: '', component: BoletaParentComponent},
  {path: 'generales', component: DatosGeneralesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
