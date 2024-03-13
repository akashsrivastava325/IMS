import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaimService } from '../../shared/claim.service';

@Component({
  selector: 'app-claim-details-data-admin',
  templateUrl: './claim-details-data-admin.component.html',
  styleUrl: './claim-details-data-admin.component.css',
})
export class ClaimDetailsDataAdminComponent {
  claimId!: number;
  claim: any;

  constructor(
    private route: ActivatedRoute,
    private claimService: ClaimService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.claimId = params['id'];
      this.getClaimDetails(this.claimId);
    });
  }

  getClaimDetails(id: number): void {
    this.claimService.getClaim(id).subscribe((data: any) => {
      this.claim = data;
    });
  }

  approveClaim(): void {
    if (this.claim) {
      this.claimService
        .putClaim(this.claim.id, { status: 'Active' })
        .subscribe(() => {
          // Reload claim details after approval
          this.getClaimDetails(this.claim.id);
        });
    }
  }

  rejectClaim(): void {
    if (this.claim) {
      this.claimService
        .putClaim(this.claim.id, { status: 'Rejected' })
        .subscribe(() => {
          // Reload claim details after rejection
          this.getClaimDetails(this.claim.id);
        });
    }
  }
}
