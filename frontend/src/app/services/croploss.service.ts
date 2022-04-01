import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Croploss } from '../models/croploss.model';
const baseUrl = 'http://localhost:8000/perdas';

@Injectable({
  providedIn: 'root'
})

export class CroplossService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Croploss[]> {
    return this.http.get<Croploss[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}/`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByCPF(farmer_cpf: any): Observable<Croploss[]> {
    return this.http.get<Croploss[]>(`${baseUrl}/?farmer_cpf=${farmer_cpf}`);
  }
}
