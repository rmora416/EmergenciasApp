export interface ItemBoleta {    

    ID_Datos_Inspeccion: number;  
    URI: string;  
    EmergenciaID: number;  
    Fecha_Visita: Date | undefined;  
    Solo_Externa: boolean | undefined;  
    Valoracion_Realizada: boolean | undefined;  
    ID_Tipo_Acceso: number;  
    ID_Fallas_Suministro_Electrico: number;  
    Focos_Contaminacion: boolean | undefined;  
    Informe_Condiciones_Riesgo: boolean | undefined;  
    ID_Institucion_Informe: number;  
    Otro_Institucion_Informe: string

}