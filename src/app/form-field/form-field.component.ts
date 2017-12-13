import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  @Input() controlLabel?: string;
  @Input() controlName?: any;
  @Output() isFocus = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  getControlError(controlName: AbstractControl): ValidationErrors {
    return controlName.errors;
  }

  isFieldFocus() {
    this.isFocus.emit(true);
  }

}
