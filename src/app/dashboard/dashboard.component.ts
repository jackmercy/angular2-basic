import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Role: string;
  username: string;
  key = 'user';
  permission: object;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.Role = this.auth.getRole(this.key);
    console.log(this.Role);
    this.username = this.auth.getUsername(this.key);
    this.permission = this.auth.getListMainMenu(this.Role);
    // console.log(this.auth.getPermission(this.Role));
  }

  isAdmin(): boolean {
    if (this.Role === 'admin') {
      return true;
    }
    return false;
  }
}
