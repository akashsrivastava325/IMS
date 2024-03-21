import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClaimService } from '../shared/claim.service';
import { PolicyDetailService } from '../shared/policy-detail.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css',
})
export class ClaimsComponent {
  showSuccessMessage = false;
  claimForm!: FormGroup;
  policyNames: string[] = [];
  policyIdMapping: { [name: string]: number } = {};
  userId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private claimService: ClaimService,
    private policyService: PolicyDetailService
  ) {}
  fetchPolicyNames(): void {
    const userId = 1; // Manually set user ID for now
    this.claimService.getPolicyNamesByUserId(userId).subscribe(
      (policyNames) => {
        this.policyNames = policyNames;
      },
      (error) => {
        console.error('Error fetching policy names:', error);
        // Handle error if needed
      }
    );
  }

  fetchPolicyIdMapping() {
    this.policyService.getPolicyDetails().subscribe(
      (policies: any[]) => {
        // Populate the policyIdMapping based on the policies retrieved from the backend
        policies.forEach((policy) => {
          this.policyIdMapping[policy.name] = policy.id;
        });
      },
      (error) => {
        console.error('Error fetching policies:', error);
      }
    );
  }

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('userId'));
    this.claimForm = this.formBuilder.group({
      policyId: [null, Validators.required],
      incidentDate: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      document: ['', Validators.required],
      status: ['Pending', Validators.required],
      userId: [this.userId],
      message: ['', Validators.required],
    });
    this.fetchPolicyNames();
    this.fetchPolicyIdMapping();
  }

  onSubmit() {
    const formValue = this.claimForm.value;
    const policyName = formValue.policyId;
    const policyId = this.policyIdMapping[policyName];
    formValue.policyId = policyId;

    console.log(formValue); // Make sure policyId is replaced with its corresponding id
    // Send the formValue to your claim service for submission
    // Assuming you have a claim service named claimService with a createClaim method
    this.claimService.postClaim(formValue).subscribe(
      (response) => {
        // Handle success response
        this.showSuccessMessage = true;
        console.log('Claim submitted successfully:', response);
      },
      (error) => {
        // Handle error response
        console.error('Error submitting claim:', error);
      }
    );
  }
}
