import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TazaI } from '../../models/taza.interface';

@Injectable({
  providedIn: 'root'
})
export class TazaService {

  private urlAPI = 'http://localhost:3000/taza';
  private headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(private http: HttpClient) { }

  getAllTaza(): Observable<TazaI[]> {
    return this.http.get<TazaI[]>(this.urlAPI, { headers: this.headers } );
  }

  getTazaById(data: any): Observable<any> {
    return this.http.post<any>(this.urlAPI + "/byid", {data}, {headers: this.headers});
  }

  postNewIngreso(data: TazaI): Observable<TazaI> {
    return this.http.post<TazaI>(this.urlAPI, {data}, {headers: this.headers});
  }
}
