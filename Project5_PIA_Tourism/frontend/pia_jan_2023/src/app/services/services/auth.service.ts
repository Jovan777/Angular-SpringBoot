import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://localhost:8080/api/auth'

  constructor(private http: HttpClient) { }


  loginAgency(data : any){
    return this.http.post(this.BASE_URL+'/agencija/login', data);
  }

  loginPutnik(data : any){
    return this.http.post(this.BASE_URL+'/putnik/login', data);
  }

}
