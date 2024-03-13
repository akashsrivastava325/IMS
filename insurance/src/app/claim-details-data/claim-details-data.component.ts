import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaimService } from '../shared/claim.service';

@Component({
  selector: 'app-claim-details-data',
  templateUrl: './claim-details-data.component.html',
  styleUrl: './claim-details-data.component.css',
})
export class ClaimDetailsDataComponent {
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
}
