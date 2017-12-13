import { Component, OnInit } from '@angular/core';
import { GetMenuItemsService } from '../services/get-menu-items.service';
import { MaterialDesignModule } from '../material-design/material-design.module';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  items: string[];
  constructor(private menuItems: GetMenuItemsService) { }

  ngOnInit() {
    this.items = this.menuItems.getMenuItems();
  }

}
