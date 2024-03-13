import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PolicyDetailService } from '../shared/policy-detail.service';
import { PolicyDetail } from '../shared/policy-detail.model';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css',
})
export class TestingComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  formBuilder: any;

  policyList: any[] = [];

  newPolicyData: any = {}; // Object to hold data for creating new policy

  constructor(public service: PolicyDetailService) {}

  onSubmit(): void {
    // Your form submission logic here
  }

  ngOnInit(): void {
    this.getPolicyD();
  }

  getPolicyD(): void {
    console.log('bhagwaan har jagah hai');
    this.service.getPolicyDetails().subscribe((data) => {
      this.policyList = data;
    });

    console.log(this.policyList);
  }

  createPolicy(): void {
    console.log('bhagwaan har jagah hai bhai');
    this.service.createPolicy(this.newPolicyData).subscribe(
      (response) => {
        // Handle successful response if needed
        console.log('Policy created successfully:', response);
        // Clear the form or perform any other necessary actions
        this.newPolicyData = {};
      },
      (error) => {
        // Handle error response if needed
        console.error('Error creating policy:', error);
      }
    );
  }
}
