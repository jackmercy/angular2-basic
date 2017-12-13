import { Injectable } from '@angular/core';

@Injectable()
export class GetMenuItemsService {

  constructor() { }
  items: string[] = ['Item 1','Item 2','Item 3','Item 4'];

  getMenuItems(){
    return this.items;
  }
}
