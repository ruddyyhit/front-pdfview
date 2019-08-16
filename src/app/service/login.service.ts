import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

   }
   loginServiceddemo() {
     return this.http.get('http://localhost/8080/login');
   }
   viewPageService(username, password) {
     return this.http.post('http://localhost/8080/login', {
       username, password});
   }

}
