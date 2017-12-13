import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-error-field',
  templateUrl: './error-field.component.html',
  styleUrls: ['./error-field.component.css']
})
export class ErrorFieldComponent implements OnInit {

  @Input() errorCode?: ValidationErrors;
  @Input() errorMessage?: string;
  @Input() displayError: boolean;

  message = '';

  validationMessage: any = {
    matchOther: 'These passwords don\'t match. Try again?',
    required: 'You can\'t leave it empty',
    noUser: 'Invalid username or password!',
    email: 'Invalid email format',
    401: 'Unauthorized'
  };

  constructor() { }

  ngOnInit() {
    if (this.errorCode) {
      this.getErrorMessage(this.errorCode);
    } else {
      this.message = this.errorMessage;
    }
  }

  getErrorMessage(errorCode: ValidationErrors) {
    if (errorCode) {
      Object.keys(errorCode).map(key => this.message = this.validationMessage[key]);
    }
  }
}
