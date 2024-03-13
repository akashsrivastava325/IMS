import { Component, OnInit } from '@angular/core';
import { InsuranceFormService } from '../../shared/insurance-form.service';

@Component({
  selector: 'app-insurance-requests',
  templateUrl: './insurance-requests.component.html',
  styleUrl: './insurance-requests.component.css',
})
export class InsuranceRequestsComponent {
  approvedInsurance: any[] = [];
  rejectedInsurance: any[] = [];
  pendingInsurance: any[] = [];

  constructor(private insuranceService: InsuranceFormService) {}

  ngOnInit(): void {
    this.getInsuranceData();
  }

  getInsuranceData(): void {
    this.insuranceService.getInsuranceFormsMore().subscribe((data: any[]) => {
      this.approvedInsurance = data.filter(
        (insurance) => insurance.status === 'Active'
      );
      this.rejectedInsurance = data.filter(
        (insurance) => insurance.status === 'Rejected'
      );
      this.pendingInsurance = data.filter(
        (insurance) => insurance.status === 'Pending'
      );
    });
  }
}
