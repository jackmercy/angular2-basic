import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class SessionStorage {
    setUser(key: string, value: User): void {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    getUser(key: string): User {
        var _user = sessionStorage.getItem(key);
        return JSON.parse(_user);
    }
    
}
