export class Generales_item {
    constructor(public ID_Datos_Inspeccion: number,
      public URI: string, 
      public EmergenciaID: number, 
      public Fecha_Visita: Date, 
      public Solo_Externa: boolean, 
      public Valoracion_Realizada: boolean, 
      public ID_Tipo_Acceso: number, 
      public ID_Fallas_Suministro_Electrico: number, 
      public Focos_Contaminacion: boolean, 
      public Informe_Condiciones_Riesgo: boolean, 
      public ID_Institucion_Informe: number, 
      public Otro_Institucion_Informe: string ) 
      
      {
        
      }
  }