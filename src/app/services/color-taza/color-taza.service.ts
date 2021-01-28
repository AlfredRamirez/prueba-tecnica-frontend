import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ColorTazaI } from '../../models/color-taza.interface';

@Injectable({
  providedIn: 'root'
})
export class ColorTazaService {

  private urlAPI = 'http://localhost:3000/color-taza';
  private headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(private http: HttpClient) { }

  getAllColorTaza(): Observable<ColorTazaI[]> {
    return this.http.get<ColorTazaI[]>(this.urlAPI, { headers: this.headers } );
  }

  postNewColorTaza(data: ColorTazaI): Observable<ColorTazaI> {
    return this.http.post<ColorTazaI>(this.urlAPI, {data}, {headers: this.headers});
  }
}
