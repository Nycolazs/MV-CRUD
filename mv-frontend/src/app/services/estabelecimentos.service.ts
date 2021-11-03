import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Estabelecimento } from "./../models/Estabelecimento";

@Injectable()
export class EstabelecimentoService {

  urlBase: String = "http://localhost:8080/api/";

  body: object = {};

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getEstabelecimentos() {
    return this.http.get<any>(this.urlBase + "estabelecimentos/")
      .toPromise()
      .then(res => <Estabelecimento[]>res)
      .then(data => { return data; });
  }

  getEstabelecimentoUnico(){
    return this.http.get<any>(this.urlBase + "getestabelecimento/")
      .toPromise()
      .then(res => <Estabelecimento[]>res)
      .then(data => { return data; });
  }

  getEstabelecimentoNome(nome: string) {
    if (nome.length == 0) {
      return this.getEstabelecimentos();
    } else {
      return this.http.get<any>(this.urlBase + "estabelecimento?nome=" + nome)
        .toPromise()
        .then(res => <Estabelecimento[]>res)
        .then(data => { return data; });
    }

  }

  addEstabelecimento(data: string) {
    return this.http.post<any>(this.urlBase + 'estabelecimento/', data, this.httpOptions);
  }

  getEstabelecimento(id: string) {
    return this.http.get<any>(this.urlBase + "estabelecimento/" + id)
      .toPromise()
      .then(res => <Estabelecimento[]>res)
      .then(data => { return data; });
  }

  updateEstabelecimento(data: string, id: string) {
    return this.http.put<any>(this.urlBase + 'estabelecimento/' + id, data, this.httpOptions);
  }

  async deleteEstabelecimento(id: string) {
    return await this.http.delete<any>(this.urlBase + "estabelecimento/" + id)
      .toPromise()
      .then()
  }

}
