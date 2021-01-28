import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { DimensionTazaI } from '../../models/dimension-taza.interface';

@Injectable({
  providedIn: 'root'
})
export class DimensionTazaService {

  private urlAPI = 'http://localhost:3000/dimension-taza';
  private headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(private http: HttpClient) { }

  getAllDimensionTaza(): Observable<DimensionTazaI[]> {
    return this.http.get<DimensionTazaI[]>(this.urlAPI, { headers: this.headers } );
  }

  postNewColorTaza(data: DimensionTazaI): Observable<DimensionTazaI> {
    return this.http.post<DimensionTazaI>(this.urlAPI, {data}, {headers: this.headers});
  }
}
