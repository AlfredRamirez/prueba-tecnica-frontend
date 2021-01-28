import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { MaterialTazaI } from '../../models/material-taza.interface';

@Injectable({
  providedIn: 'root'
})
export class MaterialTazaService {

  private urlAPI = 'http://localhost:3000/material-taza';
  private headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(private http: HttpClient) { }

  getAllMaterialTaza(): Observable<MaterialTazaI[]> {
    return this.http.get<MaterialTazaI[]>(this.urlAPI, { headers: this.headers } );
  }

  postNewMaterialTaza(data: MaterialTazaI): Observable<MaterialTazaI> {
    return this.http.post<MaterialTazaI>(this.urlAPI, {data}, {headers: this.headers});
  }
}
