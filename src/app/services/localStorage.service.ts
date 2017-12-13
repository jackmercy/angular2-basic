import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorage {
    setItem(key: string, value: object): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string): JSON {
        const item = localStorage.getItem(key);
        return JSON.parse(item);
    }

}
