import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-error-field',
  templateUrl: './error-field.component.html',
  styleUrls: ['./error-field.component.css']
})
export class ErrorFieldComponent implements OnInit {

  @Input() field: AbstractControl;
  @Input() displayError: boolean;

  validationMessage: any = {
    required: 'You can\'t leave it empty'
  }

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage(field: AbstractControl): string {
/*    Object.keys(field.errors).map(key => {
      if ()
    })*/
    return 'loi roi ne';
  }



}
