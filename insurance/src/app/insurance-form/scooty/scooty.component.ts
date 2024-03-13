import { Component, OnInit } from '@angular/core';
import { InsuranceForm } from '../../models/insurance-form.model';
import { NavbarComponent } from '../../navbar/navbar.component';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PolicyDetail } from './../../shared/policy-detail.model';
import { PolicyDetailService } from './../../shared/policy-detail.service';
import { InsuranceFormService } from '../../shared/insurance-form.service';

@Component({
  selector: 'app-scooty',
  templateUrl: './scooty.component.html',
  styleUrl: './scooty.component.css'
})
export class ScootyComponent {
  myForm!: FormGroup;
  policyList: any[] = [];
  newInsuranceData: any = {};

  constructor(
    private formBuilder: FormBuilder,
    public service: PolicyDetailService,
    private insuranceFormService: InsuranceFormService
  ) {
    this.myForm = this.formBuilder.group({
      userId: [2],
      make: ['', [Validators.required, this.alphaNumericValidator]],
      model: ['', [Validators.required, this.alphaNumericValidator]],
      cylinderCapacity: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ],
      kW: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      dateOfManufacture: ['', [Validators.required, this.pastDateValidator]],
      numberOfSeats: [null],
      rightHandDrive: [''],
      numberOfSeatsMotorcycle: [null],
      fuelType: ['', [Validators.required, this.alphaNumericValidator]],
      payload: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      totalWeight: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      listPrice: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      licensePlateNumber: [
        '',
        [Validators.required, this.alphaNumericValidator],
      ],
      annualMileage: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ],
      firstName: ['', [Validators.required, this.alphaNumericValidator]],
      lastName: ['', [Validators.required, this.alphaNumericValidator]],
      dateOfBirth: ['', [Validators.required, this.pastDateValidator]],
      gender: ['', [Validators.required, this.alphaNumericValidator]],
      streetAddress: ['', [Validators.required, this.alphaNumericValidator]],
      country: ['', [Validators.required, this.alphaNumericValidator]],
      zipCode: ['', [Validators.required, this.alphaNumericValidator]],
      city: ['', [Validators.required, this.alphaNumericValidator]],
      occupation: ['', [Validators.required, this.alphaNumericValidator]],
      hobbies: ['', [Validators.required, this.alphaNumericValidator]],
      website: [''],
      picture: [''],
      startDate: ['', [Validators.required, this.pastDateValidator]],
      insuranceSum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      meritRating: ['', [Validators.required, this.alphaNumericValidator]],
      damageInsurance: ['', [Validators.required, this.alphaNumericValidator]],
      optionalProducts: ['', [Validators.required, this.alphaNumericValidator]],
      courtesyCar: ['', [Validators.required, this.alphaNumericValidator]],
      priceSum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      selectOption: ['S'],
      quoteType: ['S'],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      comments: ['', [Validators.required, this.alphaNumericValidator]],
      vehicleType: ['Car'],
      policyId: [''],
      status: ['Pending'],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.insuranceFormService
        .createInsuranceForm(this.myForm.value)
        .subscribe(
          (response) => {
            console.log('Form submitted successfully:', response);
            // You can handle the response here, e.g., show a success message
          },
          (error) => {
            console.error('Error submitting form:', error);
            // Handle the error, e.g., show an error message
          }
        );
    } else {
      console.log(this.myForm.errors, 'errrrr');
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

  ngOnInit(): void {
    if (this.myForm.valid) {
      // Submit form data
    } else {
      // Form is invalid, display error messages
      this.validateAllFormFields(this.myForm);
    }
    this.service.getPolicyDetails().subscribe((data) => {
      this.policyList = data.filter(
        (policy) => policy.vehicleType.toLowerCase() === 'bike'
      );
    });
  }

  currentForm: string = 'vehicle';
  showForm(formType: string) {
    this.currentForm = formType;
  }

  isFormComplete: boolean = false;
  checkFormCompletion() {
    this.isFormComplete = this.myForm.valid;
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control) {
        // Check if control is not null
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
  calculatePremiumAmountPerMonth(basePremiumRate: number): number {
    const listPrice = this.myForm.get('listPrice')?.value;
    return basePremiumRate && listPrice
      ? (basePremiumRate * listPrice) / 12
      : 0;
  }

  calculatePercentageOfBasePremiumRate(basePremiumRate: number): number {
    const listPrice = this.myForm.get('listPrice')?.value;
    return basePremiumRate && listPrice
      ? (basePremiumRate / listPrice) * 100
      : 0;
  }

  onPolicySelection(policyId: number) {
    this.myForm.patchValue({
      policyId: policyId,
    });
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

  alphaNumericValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    if (!/^[a-zA-Z0-9\s]*$/.test(control.value)) {
      return { alphaNumeric: true };
    }
    return null;
  }

  submitForm() {
    if (this.myForm.valid) {
      // Form submission logic
      console.log('Form submitted:', this.myForm.value);
    } else {
      // Handle form validation errors
      console.error('Form is invalid');
    }
  }
}
