import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule, MatInputModule, MatNativeDateModule, MatTableModule, MatTabsModule, MatSortModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticateGuard } from './guard/authenticate.guard';
import { IsAdminGuard } from './guard/is-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppDialogComponent } from './app-dialog/app-dialog.component';
import { ErrorFieldComponent } from './error-field/error-field.component';
import { CdkTableModule } from '@angular/cdk/table';
import { LocalStorage } from './services/localStorage.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyCPDlkEzb8kIucC6MW8CWsXNAwkC-5M2jM',
  authDomain: 'ng-auth-f1a6d.firebaseapp.com',
  databaseURL: 'https://ng-auth-f1a6d.firebaseio.com',
  projectId: 'ng-auth-f1a6d',
  storageBucket: 'ng-auth-f1a6d.appspot.com',
  messagingSenderId: '332956864697'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    WelcomeComponent,
    AdminComponent,
    ErrorPageComponent,
    AppDialogComponent,
    ErrorFieldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // table-material
    FormsModule, // table-material

    ReactiveFormsModule, // table-material
    MatNativeDateModule, // table-material
    MatFormFieldModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,

    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HttpModule, // table-material

    CdkTableModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [AuthService, LocalStorage, AuthenticateGuard, IsAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
