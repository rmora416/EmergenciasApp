
import { Component, Output, EventEmitter, OnInit, AfterContentInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Generales } from '../Clases/DatosGenerales.class';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnChanges, OnInit {

  @Input() datos! : Generales;
  @Output() formReady = new EventEmitter<FormGroup>()
  generalesForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generalesForm = this.fb.group({
      ID_Datos_Inspeccion: [''], 
      EmergenciaID: ['', [Validators.required]], 
      Fecha_Visita: ['', [Validators.required]],
      Solo_Externa: null, 
      Valoracion_Realizada: null, 
      ID_Tipo_Acceso: [''],  
      ID_Fallas_Suministro_Electrico: [''],
      Focos_Contaminacion: [''], 
      Informe_Condiciones_Riesgo: [''], 
      ID_Institucion_Informe: ['', [Validators.required]], 
      Otro_Institucion_Informe: ['']

    });

    // Emit the form group to the parent
    this.formReady.emit(this.generalesForm);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && !changes['user'].firstChange) { 
      this.generalesForm.patchValue({        

        ID_Datos_Inspeccion: this.datos.ID_Datos_Inspeccion, 
        EmergenciaID: this.datos.EmergenciaID,
        Fecha_Visita: this.datos.Fecha_Visita,
        Solo_Externa: this.datos.Solo_Externa, 
        Valoracion_Realizada: this.datos.Valoracion_Realizada, 
        ID_Tipo_Acceso: this.datos.ID_Tipo_Acceso, 
        ID_Fallas_Suministro_Electrico: this.datos.ID_Fallas_Suministro_Electrico,
        Focos_Contaminacion: this.datos.Focos_Contaminacion,
        Informe_Condiciones_Riesgo: this.datos.Informe_Condiciones_Riesgo,
        ID_Institucion_Informe: this.datos.ID_Institucion_Informe,
        Otro_Institucion_Informe: this.datos.Otro_Institucion_Informe,

      }) 
    }
  }

}
