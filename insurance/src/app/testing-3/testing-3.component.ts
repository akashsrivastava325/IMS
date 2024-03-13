import { Component, OnInit } from '@angular/core';
import { Testing2Component } from './../testing-2/testing-2.component';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-testing-3',
  templateUrl: './testing-3.component.html',
  styleUrl: './testing-3.component.css',
})
export class Testing3Component implements OnInit {
  emailForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      text: ['', [Validators.required, this.alphaNumericValidator]],
      date: ['', [Validators.required, this.pastDateValidator]],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitForm() {
    if (this.emailForm.valid) {
      // Form submission logic
      console.log('Form submitted:', this.emailForm.value);
    } else {
      // Handle form validation errors
      console.error('Form is invalid');
    }
  }

  pastDateValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    if (selectedDate >= today) {
      return { pastDate: true };
    }
    return null;
  }

  alphaNumericValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (!/^[a-zA-Z]*$/.test(control.value)) {
      return { 'alphaNumeric': true };
    }
    return null;
  }
}
