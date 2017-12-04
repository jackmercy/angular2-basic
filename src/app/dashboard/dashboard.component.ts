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
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.Role = this.auth.getRole();
    this.username = this.auth.getUsername();
  }

  isAdmin(): boolean {
    if (this.Role === 'admin') {
      return true;
    }
    return false;
  }
}
