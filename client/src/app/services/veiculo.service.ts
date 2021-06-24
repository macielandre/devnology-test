import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VeiculoService {

  URL_GET_VEICULOS='/api/get'
  URL_POST_VEICULOS='/api/post'
  URL_PUT_VEICULOS='/api/put'
  URL_DELETE_VEICULOS='/api/delete'

  constructor(private http: HttpClient) { }

  get(id: number): Observable<any>{
    return this.http.get<any>(`${this.URL_GET_VEICULOS}?id=${id}`)
  }

  post(): Observable<any>{
    return this.http.get<any>(`${this.URL_GET_VEICULOS}`)
  }

  put(): Observable<any>{
    return this.http.get<any>(`${this.URL_GET_VEICULOS}`)
  }

  delete(): Observable<any>{
    return this.http.delete<any>(`${this.URL_GET_VEICULOS}`)
  }
}
