import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
// import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string = 'user';
  password: string = '';
  errorMessage = 'Invalid Credintials';
  invalidLogin = false;
  constructor(
     private loginService: LoginService,
     private router: Router
  ) { }

  ngOnInit() {
  }

  welcomeLogin() {
  //  return this.loginService.loginServiceddemo();
    // if (this.name === 'user' && this.password === '12345'){

    //   this.invalidLogin = false;
    //   this.router.navigate(['viewpage']);
    // } else {
    //   this.invalidLogin = true;
    // }

  }
}
