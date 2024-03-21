import { Component, OnInit } from '@angular/core';
import { InsuranceForm } from '../../models/insurance-form.model';
import { NavbarComponent } from '../../navbar/navbar.component';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PolicyDetail } from './../../shared/policy-detail.model';
import { PolicyDetailService } from './../../shared/policy-detail.service';
import { InsuranceFormService } from '../../shared/insurance-form.service';

//to include service of insurance

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrl: './bike.component.css',
})
export class BikeComponent implements OnInit {
  myForm!: FormGroup;
  userId!: number;
  policyList: any[] = [];
  newInsuranceData: any = {};
  showSuccessMessage: boolean = false;
  selectedPolicyId: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    public service: PolicyDetailService,
    private insuranceFormService: InsuranceFormService
  ) {
    this.userId = Number(localStorage.getItem('userId'));
    this.myForm = this.formBuilder.group({
      userId: [this.userId],
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
      vehicleType: ['Bike'],
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
            this.showSuccessMessage = true;
            alert('Form Submitted Successfully!!');
            console.log('Form submitted successfully:', response);
            // You can handle the response here, e.g., show a success message
          },
          (error) => {
            alert('Check all fields! Something went wrong');
            console.log(this.myForm.value);
            console.error('Error submitting form:', error);
            // Handle the error, e.g., show an error message
          }
        );
    } else {
      alert('Check all fields! Something went wrong');
      console.log(this.myForm.errors, 'errrrr');
      console.log(this.myForm.value);
      console.log('Form is invalid. Please fill in all required fields.');
    }

    if (this.myForm.valid) {
      const formDataJson = JSON.stringify(this.myForm.value);
      this.insuranceFormService.sendEmail(formDataJson).subscribe(
        (response) => {
          console.log(formDataJson);
          this.showSuccessMessage = true;
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.log(formDataJson);
          console.error('Error sending email:', error);
          // Handle error here
        }
      );
    } else {
      console.error('Form is invalid');
      // Handle invalid form here
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
    this.selectedPolicyId = policyId;
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
      this.showSuccessMessage = true;
      console.log('Form submitted:', this.myForm.value);
    } else {
      // Handle form validation errors
      console.log('json', this.myForm.value);
      alert('Please re-try. Something went wrong!!');
      console.error('Form is invalid');
    }
  }
}
