import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NarudzbinaService {

  private BASE_URL = "http://localhost:8080/api/narudzbine"

  constructor(private http : HttpClient) { }


  public dodajNarudzbinu(narudzbina : any) : Observable<any>{
    return this.http.post(this.BASE_URL+'/add', narudzbina);
  }

  public dohvatiNarudzbine() : Observable<any>{
    return this.http.get(this.BASE_URL);
  }

  public prihvatiNarudzbinu(id : number) : Observable<any>{
    return this.http.post(this.BASE_URL+'/accept/'+id, {});
  }

}
