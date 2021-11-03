import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Profissional } from '../models/Profissional';

@Injectable()
export class ProfissionalService {

  urlBase: String = "http://localhost:8080/api/";

  body: object = {};

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getProfissionais() {
    return this.http.get<any>(this.urlBase + "profissionais/")
      .toPromise()
      .then(res => <Profissional[]>res)
      .then(data => { return data; });
  }

  getProfissionalNome(nome: string) {
    if (nome.length == 0) {
      return this.getProfissionais();
    } else {
      return this.http.get<any>(this.urlBase + "profissional?nome=" + nome)
        .toPromise()
        .then(res => <Profissional[]>res)
        .then(data => { return data; });
    }
  }

  addProfissional(data: string) {
    return this.http.post<any>(this.urlBase + 'profissional/', data, this.httpOptions);
  }

  async getProfissional(id: string) {
    return await this.http.get<any>(this.urlBase + "profissional/" + id)
      .toPromise()
      .then(res => <Profissional[]>res)
      .then(data => { return data; });
  }

  updateProfissional(data: string, id: string) {
    return this.http.put<any>(this.urlBase + 'profissional/' + id, data, this.httpOptions);
  }

  async deleteProfissional(id: string) {
    return await this.http.delete<any>(this.urlBase + "profissional/" + id)
      .toPromise()
      .then()
  }

}
