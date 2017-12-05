import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  //username: string;
  //password: string;
  state: string;
  error: string;
  constructor(private auth: AuthService,
              private router: Router,
              private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.builder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginWithEmail() {
/*    this.state = this.auth.loginWithEmail(this.username, this.password);
    if ( this.state === 'admin' || this.state === 'user') {
      this.router.navigate(['/dashboard']);
    } else if (this.state === '401') {
      this.error = '401 unauthorized';
    }*/

  }

  isFieldInvalid(field: AbstractControl){
    return !field.valid && field.touched;
  }

  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }

}
