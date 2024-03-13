import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { UserPolicyStatusService } from '../shared/user-policy-status.service';

@Component({
  selector: 'app-user-policy-status',
  templateUrl: './user-policy-status.component.html',
  styleUrl: './user-policy-status.component.css',
})
export class UserPolicyStatusComponent implements OnInit {
  userPolicyStatusList: any[] = [];

  constructor(
    private router: Router, // Inject Router
    private userPolicyStatusService: UserPolicyStatusService
  ) {}

  loadUserPolicyStatus() {
    this.userPolicyStatusService.getUserPolicyStatus().subscribe(
      (data: any[]) => {
        this.userPolicyStatusList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.loadUserPolicyStatus();
  }

  viewMore(insuranceId: number) {
    this.router.navigate(['/insurance-details', insuranceId]);
  }
}
