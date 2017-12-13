import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';



export class FormField {
  value: string;
  label: string;
  validators: ValidatorFn[];

  constructor (_value: string, _label: string, _validators: ValidatorFn[]) {
    this.value = _value;
    this.label = _label;
    this.validators = _validators;
  }

  public createFormControl(): FormControl {
    let field: FormControl;
    field = new FormControl(this.value, this.validators, null);
    return field;
  }

  public getLabel() {
    return this.label;
  }

  public  getValue() {
    return this.value;
  }
}




