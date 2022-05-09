import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//mude para sua aplicação
const baseUrl = 'https://broug-dio-bankline-api.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes`);
  }
  create(movimentacao: any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacoes`, movimentacao);
  }
  findByIdConta(idConta: any): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes/${idConta}`);
  }
}