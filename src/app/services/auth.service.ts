import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Jsonp } from '@angular/http/src/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { SessionStorage } from './sessionStorage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
  AuthState = false;
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private Storage: SessionStorage) { }

  loginWithEmail(username: string, password: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/users?username=' + username + '&password=' + password)
      .pipe(
        tap(user => { this.Storage.setUser('user', user[0]); this.AuthState = true; })
      );
  }

  isAuthenticated(): boolean {
    if (this.AuthState) {
      return true;
    }
    return false;
  }

  getRole(key: string): string {
    return this.Storage.getUser(key).role;
  }
  getUsername(key: string): string {
    return this.Storage.getUser(key).username;
  }
}
