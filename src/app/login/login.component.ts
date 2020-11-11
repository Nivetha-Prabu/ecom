import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '..//services/authentication.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(
    public authenticationService: AuthenticationService
  ) {
  }

  email: string;
  password: string;
  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
