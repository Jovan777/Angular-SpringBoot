import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private BASE_URL = "http://localhost:8080/api/auth"



  constructor(private http : HttpClient) { }

  public login(data : any) : Observable<any> {
    return this.http.post(this.BASE_URL+'/login', data);
  }

}
