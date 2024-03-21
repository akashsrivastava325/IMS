import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../../shared/claim.service';

@Component({
  selector: 'app-claim-requests',
  templateUrl: './claim-requests.component.html',
  styleUrls: ['./claim-requests.component.css'],
})
export class ClaimRequestsComponent implements OnInit {
  claimGroups: any[] = [
    { title: 'Active Claims', claims: [] },
    { title: 'Pending Claims', claims: [] },
    { title: 'Rejected Claims', claims: [] },
  ];
  selectedClaimGroup: any;
  selectedClaimId!: number; // Variable to store the selected claim ID

  constructor(private claimService: ClaimService) {}

  ngOnInit(): void {
    this.claimService.getClaimsWithPolicyNames().subscribe((data: any[]) => {
      this.claimGroups.forEach((group) => {
        group.claims = data.filter(
          (claim) => claim.status === group.title.split(' ')[0]
        );
      });

      this.selectClaimGroup(this.claimGroups[0]);
    });
  }

  selectClaimGroup(claimGroup: any): void {
    this.selectedClaimGroup = claimGroup;
  }

  // Function to set the selected claim ID
  setSelectedClaimId(claimId: number): void {
    this.selectedClaimId = claimId;
    console.log(this.selectedClaimId); // Check if the ID is logged correctly
  }
}
