import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NarudzbinaService {

  BASE_URL_POST = 'http://localhost:8080/api/narudzbine'

  BASE_URL_GET = 'http://localhost:8080/api/narudzbina'

  constructor(private http: HttpClient) { }


  public getAll() : Observable<any>{
    return this.http.get(this.BASE_URL_GET)
  }

  public postNarudzbina(data : any) : Observable<any>{
    return this.http.post(this.BASE_URL_POST, data);
  }

  public dohvatiProizvodiIzNarudzbine(id : number) : Observable<any>{
    return this.http.get(this.BASE_URL_POST+'/'+id);
  }

  public bestBuyer() : Observable<any>{
    return this.http.get(this.BASE_URL_GET+'/kupac/best');
  }

}
