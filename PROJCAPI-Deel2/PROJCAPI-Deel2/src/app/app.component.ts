
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Authenticationservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private AS : AuthService){
    AS.handleAuthentication();
  }
  title = 'Zoo Manager';
  
}
