import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField } from './form-field';

export class FormGroupData {
  groupName: string;
  formGroup: FormGroup;
  controlsName: string[];

  constructor (groupData: any) {
    // groupData example:
/*    groupData = {
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
    };*/

    this.groupName = groupData.groupName;
    this.formGroup = new FormGroup({});

    // Creat FormGroup from json data
    groupData.controls.forEach(field => {
      let formField: FormField;

      formField = new FormField(field.value, field.label, field.validators);
      this.formGroup.addControl(formField.value, formField.createFormControl());
      this.controlsName.push(formField.value);
      }

    );
  }

  public getControlsName (): string[] {
    return this.controlsName;
  }

  public getFormGroup (): FormGroup {
    return this.formGroup;
  }

  public getGroupName (): string {
    return this.groupName;
  }
}
