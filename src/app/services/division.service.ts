import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Division } from '../model/division.model';

const baseUrl = 'https://spa-api.aqiladigital.com/api/divisions'

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Division[]> {
    return this.http.get<Division[]>(baseUrl);
  }

  tambah(division: Division): Observable<Division> {
    return this.http.post<Division>(baseUrl, division);
  }

  edit(id: string, division: Division): Observable<Division> {
    return this.http.put<Division>(baseUrl + '/' + id, division);
  }

  delete(id: string): Observable<Division> {
    return this.http.delete<Division>(baseUrl + '/' + id);
  }
}
