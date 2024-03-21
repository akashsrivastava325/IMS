import { Component, OnInit } from '@angular/core';
import { InsuranceFormService } from './../shared/insurance-form.service';

@Component({
  selector: 'app-user-insurance-detail',
  templateUrl: './user-insurance-detail.component.html',
  styleUrls: ['./user-insurance-detail.component.css'],
})
export class UserInsuranceDetailComponent implements OnInit {
  userId!: number; // Provide the userId here
  activeInsuranceForms: any[] = [];
  pendingInsuranceForms: any[] = [];
  rejectedInsuranceForms: any[] = [];
  selectedInsuranceForms: any[] = []; // Stores currently selected insurance forms
  selectedStatus: string = 'Active';

  constructor(private insuranceFormService: InsuranceFormService) {}

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('userId'));
    this.insuranceFormService
      .getInsuranceFormsMore()
      .subscribe((data: any[]) => {
        this.activeInsuranceForms = data.filter(
          (form) => form.status === 'Active' && form.userId === this.userId
        );
        this.pendingInsuranceForms = data.filter(
          (form) => form.status === 'Pending' && form.userId === this.userId
        );
        this.rejectedInsuranceForms = data.filter(
          (form) => form.status === 'Rejected' && form.userId === this.userId
        );
        // By default, show active insurance forms
        this.showStatus('Active');
      });
  }

  // Function to display insurance forms based on status
  showStatus(status: string): void {
    this.selectedStatus = status;
    switch (status) {
      case 'Active':
        this.selectedInsuranceForms = this.activeInsuranceForms;
        break;
      case 'Pending':
        this.selectedInsuranceForms = this.pendingInsuranceForms;
        break;
      case 'Rejected':
        this.selectedInsuranceForms = this.rejectedInsuranceForms;
        break;
      default:
        this.selectedInsuranceForms = [];
        break;
    }
  }
}
