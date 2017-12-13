import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from '../login-page/login-page.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AuthenticateGuard } from '../guard/authenticate.guard';
import { IsAdminGuard } from '../guard/is-admin.guard';
import { AdminComponent } from '../admin/admin.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { AppDialogComponent } from '../app-dialog/app-dialog.component';
import {RegisterComponent} from '../register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', canActivate: [AuthenticateGuard], component: DashboardComponent },
  { path: 'welcome', canActivate: [AuthenticateGuard], component: WelcomeComponent },
  { path: 'dialog', canActivate: [AuthenticateGuard], component: AppDialogComponent },
  { path: 'admin', canActivate: [AuthenticateGuard, IsAdminGuard], component: AdminComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
