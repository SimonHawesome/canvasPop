import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Flavour } from '../models/flavour.model';

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

      return this._http.get<Flavour[]>(this.API_URL + '/flavours', this.httpOptions);
  }
}
