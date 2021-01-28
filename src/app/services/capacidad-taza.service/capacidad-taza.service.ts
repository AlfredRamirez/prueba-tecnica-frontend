import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CapacidadTazaI } from '../../models/capacidad-taza.interface';

@Injectable({
  providedIn: 'root'
})
export class CapacidadTazaService {

  private urlAPI = 'http://localhost:3000/capacidad-taza';
  private headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(private http: HttpClient) { }

  getAllCapacidadTaza(): Observable<CapacidadTazaI[]> {
    return this.http.get<CapacidadTazaI[]>(this.urlAPI, { headers: this.headers } );
  }

  postNewCapacidadTaza(data: CapacidadTazaI): Observable<CapacidadTazaI> {
    return this.http.post<CapacidadTazaI>(this.urlAPI, {data}, {headers: this.headers});
  }
}
