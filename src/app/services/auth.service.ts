import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Jsonp } from '@angular/http/src/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { LocalStorage } from './localStorage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
  AuthState = false;
  baseUrl = 'http://localhost:3000';
  listMainMenu: Permission[] = [
     {name: 'Admin', link: '/admin', flags: ['admin'] },
     {name: 'Admin2', link: '/admin', flags: ['admin2'] },
     {name: 'User', link: '/welcome', flags: ['admin', 'admin2', 'user'] },
     {name: 'Dialog', link: '/dialog', flags: ['admin', 'admin2', 'user'] },
     {name: 'Logout', link: '/login', flags: ['admin', 'admin2', 'user'] }
  ];

  userPermission: Permission[] = [
    { name: 'User', link: '/welcome', flags: ['admin', 'user'] },
    { name: 'Dialog', link: '/dialog', flags: ['admin', 'user'] },
    { name: 'Logout', link: '/login', flags: ['admin', 'user'] }
  ];

  getListMainMenu(role: string): Permission[] {
    let result: Permission[];
    result = [];
    for (const route of this.listMainMenu) {
      for (const flag of route.flags){
          if (flag === role) {
            result.push(route);
          }
      }
    }
    console.log(result);
    return result;
  }

  constructor(private http: HttpClient, private Storage: LocalStorage) { }

  loginWithEmail(username: string, password: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/users?username=' + username + '&password=' + password)
      .pipe(
        tap(user => { this.Storage.setItem('user', user[0]); this.AuthState = true; })
      );
  }

  isAuthenticated(): boolean {
    if (this.AuthState) {
      return true;
    }
    return false;
  }

  getRole(key: string): any {
    const user = this.Storage.getItem(key);
    console.log(user['role']);
    return user['role'];
  }
  getUsername(key: string): string {
    // return this.Storage.getItem(key);
    const user = this.Storage.getItem(key);
    return user['username'];
  }
}
interface Permission {
  name: string;
  link: string;
  flags: string[];
}
