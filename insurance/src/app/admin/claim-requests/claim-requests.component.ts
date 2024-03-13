import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../../shared/claim.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-requests',
  templateUrl: './claim-requests.component.html',
  styleUrls: ['./claim-requests.component.css'], // Corrected styleUrl to styleUrls
})
export class ClaimRequestsComponent implements OnInit {
  activeClaims: any[] = [];
  pendingClaims: any[] = [];
  rejectedClaims: any[] = [];

  constructor(private claimService: ClaimService) {}

  ngOnInit(): void {
    this.claimService.getClaimsWithPolicyNames().subscribe((data: any[]) => {
      // Categorize claims based on status
      console.log(JSON.stringify(data, null, 2));
      this.activeClaims = data.filter((claim) => claim.status === 'Active');
      this.pendingClaims = data.filter((claim) => claim.status === 'Pending');
      this.rejectedClaims = data.filter((claim) => claim.status === 'Rejected');
    });
  }
}
