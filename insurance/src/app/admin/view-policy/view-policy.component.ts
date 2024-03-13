import { Component } from '@angular/core';
import { PolicyDetailService } from '../../shared/policy-detail.service';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrl: './view-policy.component.css',
})
export class ViewPolicyComponent {
  policies: any[] = [];

  constructor(private policyService: PolicyDetailService) {}

  ngOnInit(): void {
    this.policyService.getPolicyDetails().subscribe((data) => {
      this.policies = data;
    });
  }
}
