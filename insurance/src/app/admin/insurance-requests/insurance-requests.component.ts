import { Component, OnInit } from '@angular/core';
import { InsuranceFormService } from '../../shared/insurance-form.service';

@Component({
  selector: 'app-insurance-requests',
  templateUrl: './insurance-requests.component.html',
  styleUrls: ['./insurance-requests.component.css'],
})
export class InsuranceRequestsComponent implements OnInit {
  insuranceTypes: { title: string; requests: any[] }[] = [];
  selectedInsuranceType: string = 'Approved'; // Default to Active insurance requests
  selectedInsuranceRequests: any[] = [];

  constructor(private insuranceService: InsuranceFormService) {}

  ngOnInit(): void {
    this.getInsuranceData();
  }

  getInsuranceData(): void {
    this.insuranceService.getInsuranceFormsMore().subscribe((data: any[]) => {
      // Group insurance requests by status
      this.insuranceTypes = [
        {
          title: 'Approved',
          requests: data.filter((insurance) => insurance.status === 'Active'),
        },
        {
          title: 'Rejected',
          requests: data.filter((insurance) => insurance.status === 'Rejected'),
        },
        {
          title: 'Pending',
          requests: data.filter((insurance) => insurance.status === 'Pending'),
        },
      ];

      // Initially select Active insurance requests
      this.selectInsuranceType('Approved');
    });
  }

  selectInsuranceType(insuranceType: string): void {
    this.selectedInsuranceType = insuranceType;
    // Find the selected insurance requests based on the selected type
    this.selectedInsuranceRequests =
      this.insuranceTypes.find((ins) => ins.title === insuranceType)
        ?.requests || [];
  }
}
