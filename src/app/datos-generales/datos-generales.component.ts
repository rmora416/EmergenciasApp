
import { Component, Output, EventEmitter, OnInit, AfterContentInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Generales_item } from '../Clases/DatosGenerales.class';
import { catalogo } from '../Clases/Catalogo.class';
import { BoletaService } from '../Servicios/boleta.service'
import { CatalogosService } from '../Servicios/catalogos.service'

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnChanges, OnInit {

  @Input() datos!: Generales_item;
  @Output() formReady = new EventEmitter<FormGroup>()
  generalesForm!: FormGroup;
  emergencias: catalogo[] = [];
  tiposAcceso: catalogo[] = [];
  fallasSuministroElectrico: catalogo[] = [];
  instituciones: catalogo[] = [];
  mostrarInstituciones: boolean = false;
  campoOtros: boolean = false;

  constructor(private fb: FormBuilder, public boletaService: BoletaService, public catalogosService: CatalogosService) { }

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

    this.catalogosService.getEmergencias().subscribe(items => {
      this.emergencias = items;
    });

    this.catalogosService.getTipo_Acceso().subscribe(items => {
      this.tiposAcceso = items;
    });

    this.catalogosService.getTipo_SI_No_NS().subscribe(items => {
      this.fallasSuministroElectrico = items;
    });

    this.catalogosService.getInstituciones().subscribe(items => {
      this.instituciones = items;
    });

  }

  mostarCampoInstitucion(){
    console.log(this.mostrarInstituciones);
    if(this.mostrarInstituciones) {
      this.mostrarInstituciones = false;
    } else {
      this.mostrarInstituciones = true;
    }
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


