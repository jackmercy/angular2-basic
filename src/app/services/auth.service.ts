import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  AuthState: boolean;
  Role: string;
  username: string;
  constructor() { }

  loginWithEmail(username: string, password: string): string {
    if (username === 'admin' && password === 'admin') {
      this.AuthState = true;
      this.username = 'admin';
      this.Role = 'admin';
      return 'admin';
    }
    if ( username === '123' && password === '123' ) {
      this.AuthState = true;
      this.username = username;
      this.Role = 'user';
      return 'user';
    } else {
      this.AuthState = false;
      this.Role = null;
      return '401';
    }
  }

  isAuthenticated(): boolean {
    if (this.AuthState) {
      return true;
    }
    return false;
  }

  getRole(): string {
    return this.Role;
  }
  getUsername(): string {
    return this.username;
  }

  setUsername(_username: string) {
    this.username = _username;
  }
}
