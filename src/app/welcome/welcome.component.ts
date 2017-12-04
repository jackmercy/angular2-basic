import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
  }

}
