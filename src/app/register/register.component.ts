import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from 'ngx-validators';
import { matchOtherValidator, passwordValidator } from '@moebius/ng-validators';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  password: FormControl;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      registerArray: this.fb.array([
        this.createAccountGroup(),
        this.createCompanyGroup(),
        this.createPersonalGroup()
    ])
    });
    console.log(this.accountPasswordGroup.get('password').errors);
  }

  onFocus(field: AbstractControl) {
    //field.updateValueAndValidity();
  }

  isFieldInvalid(field: AbstractControl) {
    return !field.valid && field.touched;
  }

  createAccountGroup(): FormGroup {
    return this.fb.group({
              email: ['', [Validators.required, Validators.email]],
              passwordGroup: this.fb.group({
                password: ['', Validators.required],
                //confirmPassword: ['', [Validators.email]]
                confirmPassword: ['', [matchOtherValidator('password')]]
              })
            });
  }

  createCompanyGroup(): FormGroup {
    return this.fb.group({
      companyName: ['', Validators.required],
      streetNumber: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  createPersonalGroup(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      workPhone: [''],
      mobilePhone: ['']
    });
  }

  get registerArray() {
    return this.registerForm.get('registerArray');
  }

  get accountGroup() {
    return this.registerArray.get([0]);
  }

  get accountPasswordGroup() {
    return this.registerArray.get([0]).get('passwordGroup');
  }

  get companyGroup() {
    return this.registerArray.get([1]);
  }

  get personalGroup() {
    return this.registerArray.get([2]);
  }

  onBlur() {
    console.log(this.accountPasswordGroup.get('confirmPassword').errors);
    this.accountPasswordGroup.get('confirmPassword').updateValueAndValidity();
  }

  onSubmit() {
    console.log(this.accountGroup.value);
    console.log(this.companyGroup.value);
    console.log(this.personalGroup.value);
  }

}
