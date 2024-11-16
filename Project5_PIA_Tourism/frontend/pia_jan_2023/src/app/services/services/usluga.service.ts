import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usluga } from '../../models/Usluga';

@Injectable({
  providedIn: 'root'
})
export class UslugaService {


  private BASE_URL = 'http://localhost:8080/api/usluga'

  constructor(private http: HttpClient) { }


  dohvatiUslugeOdAgencije(agencija : string) : Observable<Usluga[]> {
    let usluge = this.http.get<Usluga[]>(this.BASE_URL+'/agencija/'+agencija);
    console.log("Dohvacene usluge : "+usluge);
   
    return usluge;
  }

}
