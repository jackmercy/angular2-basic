import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormField } from '../form-field';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  myGroup: FormGroup;

  group = {
    groupName: 'FirstForm',
    controls: [
      {
        value: 'companyName',
        label: 'Company Name',
        validators: [
          Validators.required
        ]
      },
      {
        value: 'companyAddr',
        label: 'Company Name',
        validators: [
          Validators.required
        ]
      }
      ]
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
/*    const _group = {
      groupName: 'FirstForm',
      controls: []
    };
    this.group.controls.forEach(field => {
      const form = new FormField(field.value, field.label, field.validators);
        _group.controls.push(form);
      });

    this.myGroup = new FormGroup({});

    _group.controls.forEach(field =>
      this.myGroup.addControl(field.label, field.createFormControl())
    );*/
  }
}


