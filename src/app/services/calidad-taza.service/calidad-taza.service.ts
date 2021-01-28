import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CalidadTazaI } from '../../models/calidad-taza.interface';

@Injectable({
  providedIn: 'root'
})
export class CalidadTazaService {

  private urlAPI = 'http://localhost:3000/calidad-taza';
  private headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(private http: HttpClient) { }

  getAllCalidadTaza(): Observable<CalidadTazaI[]> {
    return this.http.get<CalidadTazaI[]>(this.urlAPI, { headers: this.headers } );
  }

  postNewCalidadTaza(data: CalidadTazaI): Observable<CalidadTazaI> {
    return this.http.post<CalidadTazaI>(this.urlAPI, {data}, {headers: this.headers});
  }
}
