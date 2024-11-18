import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = "http://localhost:8080/api/auth/login"

  constructor(private http : HttpClient) { }

  login(user : any) : Observable<any> {
    return this.http.post(this.BASE_URL, user);
  }

}
