import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Generales_item } from '../Clases/DatosGenerales.class';


@Injectable({ providedIn: 'root' })
export class BoletaService {

  private API_URL = 'https://prueba.mivah.go.cr/Emergencias_API/api';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'      
      })
  };

  constructor( private http: HttpClient) { }
  
  getDatos_Prueba(): Observable<Generales_item[]> {
    return this.http.get<Generales_item[]>(this.API_URL)
      .pipe(        
        catchError(this.handleError<Generales_item[]>('getTipo_Acceso', []))
      );
  }

  /** GET datos_Prueba by id. Return `undefined` when id not found */
  getDatosPrueba_No404<Data>(id: number): Observable<Generales_item> {
    const url = `${this.API_URL}/?id=${id}`;
    return this.http.get<Generales_item[]>(url)
      .pipe(
        map(items => items[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';          
        }),
        catchError(this.handleError<Generales_item>(`getTipo_Acceso id=${id}`))
      );
  }
  
  getDatosPrueba(uri: string): Observable<Generales_item> {
    const url = `${this.API_URL}/${uri}`;
    return this.http.get<Generales_item>(url).pipe(      
      catchError(this.handleError<Generales_item>(`getDatosPrueba id=${uri}`))
    );
  }

  /* search term */
  searchCatalogo(term: string): Observable<Generales_item[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Generales_item[]>(`${this.API_URL}/?name=${term}`).pipe(      
      catchError(this.handleError<Generales_item[]>('searchCatalogo', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addItem(item: Generales_item): Observable<Generales_item> {    
    return this.http.post<Generales_item>(this.API_URL, item, this.httpOptions).pipe(      
      catchError(this.handleError<Generales_item>('addItem'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteItem(uri: string): Observable<Generales_item> {
    const url = `${this.API_URL}/${uri}`;

    return this.http.delete<Generales_item>(url, this.httpOptions).pipe(
      
      catchError(this.handleError<Generales_item>('deleteItem'))
    );
  }

  /** PUT: update the hero on the server */
  updateItem(item: Generales_item): Observable<Generales_item> {
    const url = `${this.API_URL}/${item.URI}`;
    return this.http.put<Generales_item>(url, item, this.httpOptions).pipe(      
      catchError(this.handleError<any>('updateItem'))
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