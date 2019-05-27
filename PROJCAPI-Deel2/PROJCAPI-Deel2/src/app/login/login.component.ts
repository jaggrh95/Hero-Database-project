import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Authenticationservice';
import { AST } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AS : AuthService) {
    AS.handleAuthentication();
    
   }

  ngOnInit() {
    
      console.log(this.AS.accessToken);
      console.log(this.AS.idToken);
    
  
  }
  Login()
  {
    this.AS.login();
  }
  Logout()
  {
    this.AS.logout();
  }

}
