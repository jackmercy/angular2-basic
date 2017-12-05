import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { User } from '../models/user.model';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;
  _user: User;
  error: string;
  constructor(private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginWithEmail() {
    this.auth.loginWithEmail(this.username, this.password).
    subscribe(user => { this._user = user[0]; this.navigate(); });
  }

  navigate() {
    if (this._user.role === 'admin' || this._user.role === 'user') {
      this.router.navigate(['/dashboard']);
    } else {
      console.log(this._user);
      this.error = '401 unauthorized';
    }
  }

}
