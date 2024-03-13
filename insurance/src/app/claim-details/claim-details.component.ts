import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../shared/claim.service';
import { PolicyDetailService } from '../shared/policy-detail.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css'], // Fixing styleUrl to styleUrls
})
export class ClaimDetailsComponent implements OnInit {
  userId: number = 1; // Manually setting userId for now
  activeClaims: any[] = [];
  pendingClaims: any[] = [];
  rejectedClaims: any[] = [];

  constructor(private claimService: ClaimService) {}

  ngOnInit(): void {
    this.claimService.getClaimsWithPolicyNames().subscribe((data: any[]) => {
      // Categorize claims based on status
      console.log(JSON.stringify(data, null, 2));
      this.activeClaims = data.filter(
        (claim) => claim.status === 'Active' && claim.userId === this.userId
      );
      this.pendingClaims = data.filter(
        (claim) => claim.status === 'Pending' && claim.userId === this.userId
      );
      this.rejectedClaims = data.filter(
        (claim) => claim.status === 'Rejected' && claim.userId === this.userId
      );
    });
  }
}
