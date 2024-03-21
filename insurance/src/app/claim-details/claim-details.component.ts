// app-claim-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../shared/claim.service';

interface ClaimGroup {
  title: string;
  claims: any[]; // Adjust the type as per your data structure
}

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css'],
})
export class ClaimDetailsComponent implements OnInit {
  claimGroups: ClaimGroup[] = [];
  selectedClaimGroup!: ClaimGroup;

  constructor(private claimService: ClaimService) {}

  ngOnInit(): void {
    this.claimService.getClaimsWithPolicyNames().subscribe((data: any[]) => {
      // Initialize claimGroups with an empty array for claims
      this.claimGroups = [
        { title: 'Active Claims', claims: [] },
        { title: 'Pending Claims', claims: [] },
        { title: 'Rejected Claims', claims: [] },
      ];

      // Now populate the claims for each group
      this.claimGroups.forEach((group) => {
        group.claims = data.filter(
          (claim) => claim.status === group.title.split(' ')[0]
        );
      });

      // By default, display Active Claims
      this.selectClaimGroup(this.claimGroups[0]); // Ensure the initial selection
    });
  }

  selectClaimGroup(claimGroup: ClaimGroup): void {
    this.selectedClaimGroup = claimGroup; // Update selectedClaimGroup with the clicked claimGroup
  }
}
