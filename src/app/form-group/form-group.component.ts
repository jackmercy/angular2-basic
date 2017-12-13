import { Component, Input, OnInit } from '@angular/core';
import { FormGroupData } from '../form-group-data';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  @Input() formData: FormGroupData;

  constructor() { }

  ngOnInit() {
  }

}
