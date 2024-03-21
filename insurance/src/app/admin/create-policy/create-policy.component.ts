import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolicyDetailService } from '../../shared/policy-detail.service';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrl: './create-policy.component.css',
})
export class CreatePolicyComponent {
  policyForm!: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private policyService: PolicyDetailService
  ) {}

  ngOnInit(): void {
    this.policyForm = this.formBuilder.group({
      name: ['', Validators.required],
      vehicleType: ['', Validators.required],
      basePremiumRate: ['', Validators.required],
      status: ['Active', Validators.required],
    });
  }

  onSubmit() {
    if (this.policyForm.valid) {
      this.policyService.createPolicy(this.policyForm.value).subscribe(
        (response) => {
          alert(response.message);
          console.log('Policy created successfully:', response);
          // You can handle success here, like showing a success message or redirecting to another page
        },
        (error) => {
          alert(error.message);
          this.showSuccessMessage = true;
          console.log(this.policyForm.value);
          console.error('Error creating policy:', error);
          // You can handle errors here, like showing an error message to the user
        }
      );
    } else {
      // Form is invalid, mark all fields as touched to show validation messages
      this.policyForm.markAllAsTouched();
    }
  }
}
