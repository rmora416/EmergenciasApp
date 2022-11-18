import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { catalogo } from '../Clases/Catalogo.class';


@Injectable({ providedIn: 'root' })
export class CatalogosService {

  private API_URL = 'https://prueba.mivah.go.cr/Emergencias_API/api';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'      
      })
  };

  constructor( private http: HttpClient) { }
  
  getEmergencias(): Observable<catalogo[]> {
    const url = `${this.API_URL}/Emergencias`;
    return this.http.get(url)
      .pipe(  
        map((res : any) => { return res.map((item: { ID: number; Nombre: string; }) => {return { ID:item.ID, Descripcion: item.Nombre} as catalogo }) }),      
        catchError(this.handleError<catalogo[]>('getEmergencias', []))
      );
  }

  getTipo_Acceso(): Observable<catalogo[]> {
    const url = `${this.API_URL}/Tipo_Acceso`;
    return this.http.get<catalogo[]>(url)
      .pipe(        
        catchError(this.handleError<catalogo[]>('getTipo_Acceso', []))
      );
  }
  
  getTipo_SI_No_NS(): Observable<catalogo[]> {
    const url = `${this.API_URL}/Tipo_SI_No_NS`;
    return this.http.get<catalogo[]>(url)
      .pipe(        
        catchError(this.handleError<catalogo[]>('getTipo_SI_No_NS', []))
      );
  }

  getInstituciones(): Observable<catalogo[]> {
    const url = `${this.API_URL}/Instituciones`;
    return this.http.get<catalogo[]>(url)
      .pipe(        
        catchError(this.handleError<catalogo[]>('getInstituciones', []))
      );
  }
  

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}