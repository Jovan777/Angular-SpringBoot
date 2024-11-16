import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiService {

  private BASE_URL = 'http://localhost:8080/api/proizvodi'

  constructor(private http : HttpClient) {
  }

  public getAll() : Observable<any> {
    return this.http.get(this.BASE_URL+'/all')
  }

  public getProizvod(naziv : string): Observable<any>{
    return this.http.get(this.BASE_URL+'/'+naziv);
  }

}
