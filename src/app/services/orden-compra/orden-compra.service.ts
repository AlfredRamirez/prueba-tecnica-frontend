import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenCompraService {
  private urlAPI = 'http://localhost:3000/orden-compra';
  private headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(private http: HttpClient) { }

  postNewOrdenCompra(data: any): Observable<any> {
    return this.http.post<any>(this.urlAPI, {data}, {headers: this.headers});
  }
}
