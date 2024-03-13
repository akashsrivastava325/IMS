import { Injectable, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { UserStoreService } from '../shared/user-store.service';

@Injectable() // Add @Injectable decorator here
export class UserDataAccess implements OnInit {
  public users: any = [];
  public role!: string;

  public fullName: string = '';

  constructor(private auth: AuthService, private userStore: UserStoreService) {}

  ngOnInit() {
    this.userStore.getFullNameFromStore().subscribe((val) => {
      const fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullName = val || fullNameFromToken;
    });

    this.userStore.getRoleFromStore().subscribe((val) => {
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken;
    });
  }
}
