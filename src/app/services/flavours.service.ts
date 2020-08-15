import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Flavour } from '../models/flavour.model';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlavoursService {

  private API_URL= environment.API_URL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset=utf-8',
    })
  };

  constructor(
    private _http: HttpClient
  ) { }

  getFlavours(): Observable<Flavour[]> {

      return this._http.get<Flavour[]>(this.API_URL + '/flavours', this.httpOptions).pipe(
        tap(heroes => this.log(`fetched flavours`)),
        catchError(this.handleError('getFlavours'))
      ) as Observable<Flavour[]>;;
  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {

      console.error(error); // log to console instead

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;

      throw new Error(`${operation} failed: ${message}`);
    };

  }

  private log(message: string) {
    console.log('FlavourService: ' + message);
  }
}
