import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { InsuranceFormService } from '../../shared/insurance-form.service';

@Component({
  selector: 'app-insurance-data-admin',
  templateUrl: './insurance-data-admin.component.html',
  styleUrls: ['./insurance-data-admin.component.css'],
})
export class InsuranceDataAdminComponent implements OnInit {
  insurance$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private insuranceService: InsuranceFormService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null && id !== undefined) {
      const numericId = +id;
      if (!isNaN(numericId)) {
        this.insurance$ = this.insuranceService.getInsuranceById(numericId);
      }
    }
  }

  approveInsurance(id: number): void {
    this.updateStatus(id, 'Active');
  }

  rejectInsurance(id: number): void {
    this.updateStatus(id, 'Rejected');
  }

  private updateStatus(id: number, status: string): void {
    this.insuranceService.putInsurance(id, { status }).subscribe(
      () => {
        // Refresh insurance data after successful update
        if (this.insurance$) {
          this.insurance$ = this.insuranceService.getInsuranceById(id);
        }
      },
      (error) => {
        console.error('Error occurred during status update:', error);
      }
    );
  }
}
