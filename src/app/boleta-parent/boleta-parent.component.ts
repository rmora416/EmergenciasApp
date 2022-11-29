import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { ItemBoleta } from '../Clases/ItemBoleta.class';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';


@Component({
  selector: 'app-boleta-parent',
  templateUrl: './boleta-parent.component.html',
  styleUrls: ['./boleta-parent.component.css']
})
export class BoletaParentComponent implements OnInit {
  checkoutForm: FormGroup;
  showLoading = false;
  items_offline: ItemBoleta[] = [];

  //@Output() formReady = new EventEmitter<FormGroup>()

  constructor(private fb: FormBuilder, private router: Router) { 
    this.showLoading = false;

    this.checkoutForm = this.fb.group({
      Num_Boleta: null
    });

  }

  ngOnInit(): void {
    this.showLoading = true;
  }

  Guardar(): void
  {           
    if(localStorage.getItem('Lista_Boletas') != null)
      this.items_offline = JSON.parse(localStorage.getItem('Lista_Boletas') || '{}');        

    this.items_offline.push({
      EmergenciaID : this.checkoutForm.value.EmergenciaID,

      ID_Datos_Inspeccion:this.checkoutForm.value.Generales.ID_Datos_Inspeccion,
      Fecha_Visita: this.checkoutForm.value.Generales.Fecha_Visita,
      Solo_Externa:this.checkoutForm.value.Generales.Solo_Externa,
      Valoracion_Realizada: this.checkoutForm.value.Generales.Valoracion_Realizada,
      ID_Tipo_Acceso: this.checkoutForm.value.Generales.ID_Tipo_Acceso,
      ID_Fallas_Suministro_Electrico: this.checkoutForm.value.Generales.ID_Fallas_Suministro_Electrico,
      Focos_Contaminacion: this.checkoutForm.value.Generales.Focos_Contaminacion,
      Informe_Condiciones_Riesgo: this.checkoutForm.value.Generales.Informe_Condiciones_Riesgo,
      ID_Institucion_Informe: this.checkoutForm.value.Generales.ID_Institucion_Informe,
      Otro_Institucion_Informe: this.checkoutForm.value.Generales.Otro_Institucion_Informe,
      URI: uuid()

    });

    localStorage.setItem('Lista_Boletas',JSON.stringify(this.items_offline));
    this.router.navigate(['/lista']);
  }

  Cancel(): void{
    this.router.navigate(['/lista']);
  }

    /**
   * agrega la información de los componentes hijos en un solo FormGroup en este componente
   */
    formInitialized(name: string, form: FormGroup) 
    {
      this.checkoutForm.setControl(name, form);
      this.showLoading = false;
    }

}
