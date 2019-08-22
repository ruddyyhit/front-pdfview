import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user/user.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})

};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private https: HttpClient) {

   }
   // private baseUrl = 'http://localhost/8080/';
   loginServiceddemo() {
     return this.https.get<User>('http://localhost/8080/login');
   }
   viewPageService(username, password) {
     return this.https.post('http://localhost/8080/login', {
       username, password});
   }

}
