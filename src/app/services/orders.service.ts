import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  private API_URL = environment.API_URL;
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset=utf-8',
    })
  };

  constructor(
    private _http: HttpClient
  ) { }

  getOrders(): Observable<any> {
    return this._http.get(this.API_URL + '/orders', this.httpOptions);
  }

  placeOrder(order: Order): Observable<any> {

    return this._http.post<Order>(this.API_URL + '/orders', order, this.httpOptions);
  }
}
