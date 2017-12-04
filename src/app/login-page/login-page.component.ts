import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;
  state: string;
  error: string;
  constructor(private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginWithEmail() {
    this.state = this.auth.loginWithEmail(this.username, this.password);
    if ( this.state === 'admin' || this.state === 'user') {
      this.router.navigate(['/dashboard']);
    } else if (this.state === '401') {
      this.error = '401 unauthorized';
    }
  }

}
