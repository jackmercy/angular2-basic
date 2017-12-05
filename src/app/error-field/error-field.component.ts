import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-error-field',
  templateUrl: './error-field.component.html',
  styleUrls: ['./error-field.component.css']
})
export class ErrorFieldComponent implements OnInit {

  @Input() errorCode: ValidationErrors;
  @Input() displayError: boolean;

  validationMessage: any = {
    required: 'You can\'t leave it empty',
    noUser: 'Invalid username or password!',
    email: 'Invalid email format',
    401: 'Unauthorized'
  };

  constructor() { }

  ngOnInit() {
    //console.log(this.displayError);
  }

  getErrorMessage(errorCode: ValidationErrors): string {
    let message = '';
    if (errorCode) {
      Object.keys(errorCode).map(key => message = this.validationMessage[key]);
    }
    return message;
  }
}
