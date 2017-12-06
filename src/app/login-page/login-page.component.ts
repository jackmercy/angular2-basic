import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  _user: User;
  errorMessage: any;

  constructor(private auth: AuthService,
              private router: Router,
              private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.builder.group({
      username: ['', Validators.required, ],
      password: ['', Validators.required],
      checkbox: [false]
    });
    console.log(this.loginForm.get('checkbox').value);
    this.errorMessage = {};
  }

  loginWithEmail() {
    this.errorMessage = {};
    this.auth.loginWithEmail(this.username.value, this.password.value).
    subscribe(user => {

      if (user[0]) {
        this._user = user[0];
        this.navigate();
      } else {
        this.errorMessage.noUser = true;
      }
    });
  }

  navigate() {
    if (this._user.role === 'admin' || this._user.role === 'user') {
      this.router.navigate(['/dashboard']);
    } else {
      console.log(this._user);
      this.errorMessage = {'401': true};
    }
  }

  isFieldInvalid(field: AbstractControl) {
    return !field.valid && field.touched;
  }

  onFocus(field: AbstractControl) {
    this.errorMessage = {};
    field.updateValueAndValidity();
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
