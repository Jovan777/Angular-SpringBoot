import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiService {

  private BASE_URL = "http://localhost:8080/api/proizvodi"

  constructor(private http : HttpClient) { }

  public dohvatiSveProizvode(){
    return this.http.get(this.BASE_URL+'/all')
  }

}
