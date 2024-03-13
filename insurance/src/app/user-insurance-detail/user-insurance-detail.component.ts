import { Component } from '@angular/core';
import { InsuranceFormService } from './../shared/insurance-form.service';

@Component({
  selector: 'app-user-insurance-detail',
  templateUrl: './user-insurance-detail.component.html',
  styleUrl: './user-insurance-detail.component.css',
})
export class UserInsuranceDetailComponent {
  userId: number = 1; // Provide the userId here
  activeInsuranceForms: any[] = [];
  pendingInsuranceForms: any[] = [];
  rejectedInsuranceForms: any[] = [];

  constructor(private insuranceFormService: InsuranceFormService) {}

  ngOnInit(): void {
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
      });
  }
}
