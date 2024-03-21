import { Component, OnInit } from '@angular/core';
import { UserPolicyStatusService } from '../shared/user-policy-status.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrl: './insurance-details.component.css',
})
export class InsuranceDetailsComponent implements OnInit {
  insuranceId: number | null = null; // Initialize as null
  insuranceDetails: any;
  userId: any;

  constructor(
    private route: ActivatedRoute,
    private userPolicyStatusService: UserPolicyStatusService
  ) {}

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('userId'));
    this.route.params.subscribe((params) => {
      this.insuranceId = +params['insuranceId'] || null; // Use nullish coalescing operator to handle undefined
      if (this.insuranceId !== null) {
        this.loadInsuranceDetails();
      }
    });
  }

  loadInsuranceDetails() {
    this.userPolicyStatusService
      .getInsuranceDetails(this.insuranceId!)
      .subscribe(
        (data: any) => {
          this.insuranceDetails = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
